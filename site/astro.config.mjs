// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wyrd from './src/syntax/wyrd.mjs';

export default defineConfig({
	site: 'https://bunwright.github.io',
	base: '/wyrd-lang',
	integrations: [
		starlight({
			title: 'Wyrd',
			description: 'Sēo handbōc þǣre Wyrd sprǣce.',
			components: {
				PageTitle: './src/components/WyrdPageTitle.astro',
				Footer: './src/components/WyrdFooter.astro',
			},
			logo: {
				src: './src/assets/wyrd-mark.svg',
				alt: 'Wyrd',
			},
			favicon: '/favicon.svg',
			social: [
				{ icon: 'github', label: 'Wyrd on GitHub', href: 'https://github.com/bunwright/wyrd-lang' },
			],
			locales: {
				root: { label: 'Ænglisc', lang: 'ang' },
			},
			customCss: [
				'@fontsource-variable/manrope',
				'@fontsource-variable/newsreader',
				'@fontsource-variable/jetbrains-mono',
				'./src/styles/custom.css',
			],
			expressiveCode: {
				shiki: {
					langs: [wyrd],
				},
			},
			head: [
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#171310' } },
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Wyrd' } },
			],
			sidebar: [
				{
					label: 'Ongin',
					items: [
						{ label: 'Gesetnys', slug: 'ongin/gesetnys' },
						{ label: 'Sēo forma bōc', slug: 'ongin/forma-boc' },
					],
				},
				{
					label: 'Sēo sprǣc',
					items: [
						{ label: 'Gield and gebind', slug: 'spræc/gield' },
						{ label: 'Flōw and ymbhwyrft', slug: 'spræc/flod' },
						{ label: 'Cræftas', slug: 'spræc/craftas' },
					],
				},
				{
					label: 'Wordhord',
					items: [
						{ label: 'Cȳþword', slug: 'reference/cwide' },
						{ label: 'Inbyrde cræftas', slug: 'reference/inbyrd' },
						{ label: 'Bēodrǣw', slug: 'reference/beod' },
					],
				},
				{
					label: 'Ymb Wyrd',
					items: [
						{ label: 'Bygn', slug: 'ymbwyrft/bygn' },
						{ label: 'Wyrd and Yanxu', slug: 'ymbwyrft/yanxu' },
					],
				},
			],
		}),
	],
});
