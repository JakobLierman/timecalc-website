// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-i18next';
// import all namespaces (for the default language, only)
import common from './en/common.json';
import footer from './en/footer.json';
import home from './en/home.json';
import privacy from './en/privacy.json';
import cookies from './en/cookies.json';
import { EI18nNamespace } from './i18n.type';

declare module 'react-i18next' {
	interface CustomTypeOptions {
		// custom namespace type if you changed it
		defaultNS: EI18nNamespace.Common;
		// custom resources type
		resources: {
			[EI18nNamespace.Common]: typeof common;
			[EI18nNamespace.Footer]: typeof footer;
			[EI18nNamespace.Home]: typeof home;
			[EI18nNamespace.Privacy]: typeof privacy;
			[EI18nNamespace.Cookies]: typeof cookies;
		};
	}
}
