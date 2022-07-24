import { type MetaTag } from 'next-seo/lib/types';

export default class SeoUtils {
	/**
	 * Whether meta tags are equal
	 *
	 * @param firstTag
	 * @param secondTag
	 */
	public static equalMetaTags = (firstTag: MetaTag, secondTag: MetaTag): boolean =>
		firstTag.name === secondTag.name &&
		firstTag.httpEquiv === secondTag.httpEquiv &&
		firstTag.property === secondTag.property;
}
