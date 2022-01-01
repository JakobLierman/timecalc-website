import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig, useTranslation } from 'next-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TFuncKey } from 'react-i18next';
import { EI18nNamespace } from '@public/locales/i18n.type';
import ArticleLayout from '@/layouts/article/Article.layout';
import Typography from '@/styles/typography.styled';
import Styled from '@/styles/pages/privacy.styled';

type TProps = SSRConfig;

const Cookies: NextPage<TProps> = () => {
	const { t } = useTranslation(EI18nNamespace.Cookies);

	const lastUpdated: Date = new Date(2021, 11, 20);

	const renderParagraphs = (textListKey: TFuncKey<EI18nNamespace.Cookies>): JSX.Element[] => {
		const text: string[] = t(textListKey, { returnObjects: true }) as string[];

		// eslint-disable-next-line react/no-array-index-key
		return text.map((t, i) => <Typography.P key={i} dangerouslySetInnerHTML={{ __html: t }} />);
	};

	const renderList = (textListKey: TFuncKey<EI18nNamespace.Cookies>): JSX.Element => {
		const text: string[] = t(textListKey, { returnObjects: true }) as string[];

		return (
			<ul>
				{text.map((t, i) => (
					// eslint-disable-next-line react/no-array-index-key
					<Typography.LI key={i} dangerouslySetInnerHTML={{ __html: t }} />
				))}
			</ul>
		);
	};

	return (
		<ArticleLayout title={t('title')}>
			<Typography.H1>{t('title')}</Typography.H1>
			<Styled.Subtitle>
				{t('lastUpdated', {
					date: lastUpdated,
					// TODO: Date format
				})}
			</Styled.Subtitle>
			{renderParagraphs('content_0')}
			{/* What Are Cookies */}
			<Typography.H2>{t('what.title')}</Typography.H2>
			{renderParagraphs('what.content_0')}
			{/* How We Use Cookies */}
			<Typography.H2>{t('how.title')}</Typography.H2>
			{renderParagraphs('how.content_0')}
			{/* Disabling Cookies */}
			<Typography.H2>{t('disable.title')}</Typography.H2>
			{renderParagraphs('disable.content_0')}
			{/* The Cookies We Set */}
			<Typography.H2>{t('cookiesWeSet.title')}</Typography.H2>
			{renderList('cookiesWeSet.list_0')}
			{/* Third Party Cookies */}
			<Typography.H2>{t('thirdParty.title')}</Typography.H2>
			{renderParagraphs('thirdParty.content_0')}
			{renderList('thirdParty.list_0')}
			{/* More Information */}
			<Typography.H2>{t('information.title')}</Typography.H2>
			{renderParagraphs('information.content_0')}
			{renderList('information.list_0')}
		</ArticleLayout>
	);
};

export const getStaticProps: GetStaticProps<TProps> = async ({ locale }) => ({
	props: {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		...(await serverSideTranslations(locale!)),
	},
});

export default Cookies;
