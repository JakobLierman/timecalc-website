import { DefaultSeoProps } from 'next-seo';
import { NextRouter } from 'next/router';
import { TFunction } from 'next-i18next';
import RouterUtils from '../utils/router.utils';

const SEO = (t: TFunction, router: NextRouter): DefaultSeoProps => {
	const fullRoute = RouterUtils.getFullRoute(
		router.asPath,
		router.basePath,
		router.locale || '',
		router.defaultLocale || '',
	);

	const languageAlternateRoutes = RouterUtils.getLanguageAlternates(
		router.locales || [''],
		router.defaultLocale || '',
		router.asPath,
		router.basePath,
	);

	return {
		titleTemplate: t('seo.titleTemplate'),
		defaultTitle: t('seo.defaultTitle'),
		description: t('seo.description'),
		canonical: fullRoute,
		languageAlternates: languageAlternateRoutes,
		openGraph: {
			type: 'website',
			title: t('seo.defaultTitle'),
			description: t('seo.description'),
			images: [
				{
					url: RouterUtils.getFileUrl('banner.webp', 'image'),
					width: 1024,
					height: 500,
					alt: t('seo.defaultTitle'),
				},
			],
			locale: router.locale,
		},
		twitter: {
			cardType: 'summary_large_image',
		},
		additionalMetaTags: [
			{ name: 'author', content: t('author') },
			{
				name: 'keywords',
				content: t('seo.keywords'),
			},
			{
				httpEquiv: 'content-type',
				content: 'text/html; charset=utf-8',
			},
		],
	};
};

export default SEO;
