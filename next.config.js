const { i18n } = require('./next-i18next.config');

// TODO: Remove babel on Next.js 12 rust styled-components support

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,
};
