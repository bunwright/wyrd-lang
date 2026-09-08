#!/bin/sh

# Install the latest Wyrd release for the current macOS or Linux machine.
set -eu

repository="bunwright/wyrd-lang"
install_dir=${WYRD_INSTALL_DIR:-"${HOME}/.local/bin"}
version=${WYRD_VERSION:-latest}

usage() {
	cat <<'EOF'
Usage: install.sh [--dir DIRECTORY] [--version VERSION]

Download, verify, and install a Wyrd release on macOS or Linux.

  --dir DIRECTORY   installation directory (default: $WYRD_INSTALL_DIR or ~/.local/bin)
  --version VERSION release tag, with or without a leading v (default: latest)
  -h, --help        show this help
EOF
}

while [ "$#" -gt 0 ]; do
	case "$1" in
		--dir)
			[ "$#" -ge 2 ] || { echo "install.sh: --dir needs a value" >&2; exit 2; }
			install_dir=$2
			shift 2
			;;
		--version)
			[ "$#" -ge 2 ] || { echo "install.sh: --version needs a value" >&2; exit 2; }
			version=$2
			shift 2
			;;
		-h|--help)
			usage
			exit 0
			;;
		*)
			echo "install.sh: unknown option: $1" >&2
			usage >&2
			exit 2
			;;
	esac
done

command -v curl >/dev/null 2>&1 || {
	echo "install.sh: curl is required" >&2
	exit 1
}

case $(uname -s) in
	Darwin) system=apple-darwin ;;
	Linux) system=unknown-linux-gnu ;;
	*)
		echo "install.sh: only macOS and Linux are supported" >&2
		exit 1
		;;
esac

case $(uname -m) in
	x86_64|amd64) architecture=x86_64 ;;
	aarch64|arm64) architecture=aarch64 ;;
	*)
		echo "install.sh: unsupported architecture: $(uname -m)" >&2
		exit 1
		;;
esac

target="${architecture}-${system}"
archive="wyrd-${target}.tar.gz"
if [ "$version" = latest ]; then
	download_url="https://github.com/${repository}/releases/latest/download"
else
	case $version in v*) tag=$version ;; *) tag="v$version" ;; esac
	download_url="https://github.com/${repository}/releases/download/${tag}"
fi

tmp_dir=$(mktemp -d 2>/dev/null || mktemp -d -t wyrd-install)
trap 'rm -rf "$tmp_dir"' EXIT HUP INT TERM

echo "Downloading Wyrd ${version} for ${target}..."
curl --fail --location --silent --show-error \
	"${download_url}/${archive}" --output "${tmp_dir}/${archive}"
curl --fail --location --silent --show-error \
	"${download_url}/SHA256SUMS" --output "${tmp_dir}/SHA256SUMS"

expected=$(awk -v archive="$archive" '$2 == archive || $2 == "*" archive { print $1; exit }' "${tmp_dir}/SHA256SUMS")
[ -n "$expected" ] || {
	echo "install.sh: ${archive} has no published SHA-256 checksum" >&2
	exit 1
}

if command -v sha256sum >/dev/null 2>&1; then
	actual=$(sha256sum "${tmp_dir}/${archive}" | awk '{ print $1 }')
elif command -v shasum >/dev/null 2>&1; then
	actual=$(shasum -a 256 "${tmp_dir}/${archive}" | awk '{ print $1 }')
else
	echo "install.sh: sha256sum or shasum is required" >&2
	exit 1
fi

[ "$actual" = "$expected" ] || {
	echo "install.sh: checksum verification failed for ${archive}" >&2
	exit 1
}

tar -xzf "${tmp_dir}/${archive}" -C "$tmp_dir"
binary="${tmp_dir}/wyrd-${target}/wyrd"
[ -f "$binary" ] || {
	echo "install.sh: the release archive does not contain wyrd" >&2
	exit 1
}

mkdir -p "$install_dir"
temporary_binary="${install_dir}/.wyrd.$$"
cp "$binary" "$temporary_binary"
chmod 755 "$temporary_binary"
mv -f "$temporary_binary" "${install_dir}/wyrd"

echo "Installed Wyrd to ${install_dir}/wyrd"
case ":${PATH}:" in
	*":${install_dir}:"*) ;;
	*) echo "Add ${install_dir} to PATH to run wyrd from any directory." ;;
esac
