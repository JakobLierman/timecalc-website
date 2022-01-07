export interface LanguageAlternate {
	hrefLang: string;
	href: string;
}

export default class RouterUtils {
	private static url = process.env.NEXT_PUBLIC_PUBLIC_URL || 'https://timcalc.jakoblierman.be';

	/**
	 * Gets full route with deploy host
	 *
	 * @param path
	 * @param basePath
	 * @param locale
	 * @param defaultLocale
	 */
	public static getFullRoute = (
		path: string,
		basePath: string,
		locale: string,
		defaultLocale: string,
	): string => {
		let { url } = RouterUtils;

		if (locale !== defaultLocale) url = url.concat(`/${locale}`);
		if (basePath) url = url.concat(basePath);

		url = url.concat(path);

		return url;
	};

	/**
	 * Gets list of alternate routes for different supported locales
	 *
	 * @param locales
	 * @param defaultLocale
	 * @param path
	 * @param basePath
	 */
	public static getLanguageAlternates = (
		locales: string[],
		defaultLocale: string,
		path: string,
		basePath: string,
	): LanguageAlternate[] =>
		locales.map((locale) => ({
			hrefLang: locale,
			href: RouterUtils.getFullRoute(path, basePath, locale, defaultLocale),
		}));

	/**
	 * Get file url on server
	 *
	 * @param fileName
	 * @param type
	 */
	public static getFileUrl = (fileName: string, type: 'image' | 'file'): string => {
		let { url } = RouterUtils;

		if (type === 'image') {
			url = url.concat('/images');
		} else if (type === 'file') {
			url = url.concat('/files');
		}

		url = url.concat(`/${fileName}`);

		return url;
	};
}
