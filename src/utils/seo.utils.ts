import { MetaTag } from 'next-seo/lib/types';

export default class SeoUtils {
	/**
	 * Whether or not meta tags are equal
	 *
	 * @param firstTag
	 * @param secondTag
	 */
	public static equalMetaTags = (firstTag: MetaTag, secondTag: MetaTag): boolean =>
		firstTag.name === secondTag.name &&
		firstTag.httpEquiv === secondTag.httpEquiv &&
		firstTag.property === secondTag.property;
}
