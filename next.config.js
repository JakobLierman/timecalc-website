const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	i18n,
	swcMinify: true,
	compiler: {
		styledComponents: true,
		removeConsole: process.env.NODE_ENV === 'production',
	},
};
