import { type UrlObject } from 'url';
// eslint-disable-next-line import/no-extraneous-dependencies
import { type TFuncKey } from 'react-i18next';
import { EI18nNamespace } from '@public/locales/i18n.type';

export type TFooterLink = {
	name: TFuncKey<EI18nNamespace.Footer>;
	href: string | UrlObject;
	external?: boolean;
};

const linkValues: TFooterLink[] = [
	{
		name: 'privacyPolicy',
		href: '/privacy',
		external: false,
	},
	{
		name: 'cookiePolicy',
		href: '/cookies',
		external: false,
	},
];

export default linkValues;
