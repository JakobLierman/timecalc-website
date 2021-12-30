import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { MetaTag, OpenGraph } from 'next-seo/lib/types';
import { NextSeo } from 'next-seo';
import { EI18nNamespace } from '@public/locales/i18n.type';
import SEO from '@/constants/next-seo.config';
import { TLayoutProps } from '@/layouts/layout.types';
import Footer from '@/components/footer/Footer.component';
import SeoUtils from '@/utils/seo.utils';
import Styled from './Generic.styled';

type TProps = TLayoutProps;

const GenericLayout: FC<TProps> = ({
	title, // 50-60 characters
	description, // 150-160 characters
	author,
	keywords,
	className,
	children,
}) => {
	const { t } = useTranslation(EI18nNamespace.Common);
	const router = useRouter();

	const defaultSEO = SEO(t, router);

	const metaTags: MetaTag[] = ((): MetaTag[] => {
		const tags: MetaTag[] = [];
		const defaultTags = defaultSEO.additionalMetaTags;

		if (author) {
			tags.push({ name: 'author', content: author });
		}
		if (keywords) {
			tags.push({
				name: 'keywords',
				content: `${keywords}, ${t('seo.keywords')}`,
			});
		}

		defaultTags?.forEach((defaultTag) => {
			let exists = false;

			tags.forEach((tag) => {
				if (exists) return;

				if (SeoUtils.equalMetaTags(tag, defaultTag)) {
					exists = true;
				}
			});

			if (!exists) {
				tags.push(defaultTag);
			}
		});

		return tags;
	})();

	const openGraph: OpenGraph = ((): OpenGraph => {
		let og: OpenGraph = { ...defaultSEO.openGraph, title: defaultSEO.title };

		if (description) og = { ...og, description };

		return og;
	})();

	return (
		<>
			<NextSeo
				{...defaultSEO}
				title={title}
				description={description}
				additionalMetaTags={metaTags}
				openGraph={openGraph}
			/>
			<Styled.Container className={className}>
				<Styled.Content>{children}</Styled.Content>
				<Footer />
			</Styled.Container>
		</>
	);
};

export default GenericLayout;
