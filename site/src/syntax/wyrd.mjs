export default {
	name: 'Wyrd',
	scopeName: 'source.wyrd',
	aliases: ['wyrd'],
	patterns: [
		{ include: '#comments' },
		{ include: '#strings' },
		{
			match: '(?<![\\p{L}\\p{N}_])(cræft)(\\s+)([^\\s(]+)',
			captures: {
				1: { name: 'keyword.declaration.function.wyrd' },
				3: { name: 'entity.name.function.wyrd' },
			},
		},
		{
			name: 'keyword.control.wyrd',
			match: '(?<![\\p{L}\\p{N}_])(?:ġield|gif|þonne|elles|ende|þāhwīle|dō|for|on|breċ|forþ)(?![\\p{L}\\p{N}_])',
		},
		{
			name: 'keyword.declaration.wyrd',
			match: '(?<![\\p{L}\\p{N}_])(?:lǣt|fæst|cræft)(?![\\p{L}\\p{N}_])',
		},
		{
			name: 'keyword.operator.logical.wyrd',
			match: '(?<![\\p{L}\\p{N}_])(?:and|oþþe|ne)(?![\\p{L}\\p{N}_])',
		},
		{
			name: 'support.function.builtin.wyrd',
			match: '(?<![\\p{L}\\p{N}_])(?:cweþ|rīm|lengþu|cynn|tōworde)(?![\\p{L}\\p{N}_])',
		},
		{
			name: 'constant.language.wyrd',
			match: '(?<![\\p{L}\\p{N}_])(?:sōþ|lēas|nāwiht)(?![\\p{L}\\p{N}_])',
		},
		{
			name: 'constant.numeric.wyrd',
			match: '(?<![\\p{L}\\p{N}_])\\d+(?:\\.\\d+)?(?![\\p{L}\\p{N}_])',
		},
		{
			name: 'keyword.operator.wyrd',
			match: '==|!=|<=|>=|[+\\-*/%=<>]',
		},
	],
	repository: {
		comments: {
			patterns: [
				{ name: 'comment.line.number-sign.wyrd', match: '#.*$' },
				{ name: 'comment.line.double-slash.wyrd', match: '//.*$' },
			],
		},
		strings: {
			patterns: [
				{
					name: 'string.quoted.double.wyrd',
					begin: '"',
					end: '"',
					patterns: [{ name: 'constant.character.escape.wyrd', match: '\\\\.' }],
				},
				{
					name: 'string.quoted.curly.wyrd',
					begin: '“',
					end: '”',
					patterns: [{ name: 'constant.character.escape.wyrd', match: '\\\\.' }],
				},
				{
					name: 'string.quoted.corner.wyrd',
					begin: '「',
					end: '」',
					patterns: [{ name: 'constant.character.escape.wyrd', match: '\\\\.' }],
				},
			],
		},
	},
};
