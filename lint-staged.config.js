module.exports = {
	'*.{js,jsx,ts,tsx}': [
		'eslint --cache --cache-file node_modules/.cache/.eslintcache --fix',
		'stylelint --cache --cache-location node_modules/.cache/.stylelintcache --fix',
		'prettier --write',
	],
};
