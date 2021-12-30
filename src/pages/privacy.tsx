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

const Privacy: NextPage<TProps> = () => {
	const { t } = useTranslation(EI18nNamespace.Privacy);

	const lastUpdated: Date = new Date(2021, 11, 20);

	const renderParagraphs = (textListKey: TFuncKey<EI18nNamespace.Privacy>): JSX.Element[] => {
		const text: string[] = t(textListKey, { returnObjects: true }) as string[];

		// eslint-disable-next-line react/no-array-index-key
		return text.map((t, i) => <Typography.P key={i} dangerouslySetInnerHTML={{ __html: t }} />);
	};

	const renderList = (textListKey: TFuncKey<EI18nNamespace.Privacy>): JSX.Element => {
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
			{/* Interpretation and Definitions */}
			<Typography.H2>{t('interpretationDefinitions.title')}</Typography.H2>
			<Typography.H3>{t('interpretationDefinitions.interpretation.title')}</Typography.H3>
			{renderParagraphs('interpretationDefinitions.interpretation.content_0')}
			<Typography.H3>{t('interpretationDefinitions.definitions.title')}</Typography.H3>
			{renderParagraphs('interpretationDefinitions.definitions.content_0')}
			{renderList('interpretationDefinitions.definitions.list_0')}
			{/*	Collecting and Using Your Personal Data */}
			<Typography.H2>{t('personalData.title')}</Typography.H2>
			<Typography.H3>{t('personalData.types.title')}</Typography.H3>
			<Typography.H4>{t('personalData.types.personal.title')}</Typography.H4>
			{renderParagraphs('personalData.types.personal.content_0')}
			{renderList('personalData.types.personal.list_0')}
			<Typography.H4>{t('personalData.types.usage.title')}</Typography.H4>
			{renderParagraphs('personalData.types.usage.content_0')}
			<Typography.H3>{t('personalData.dataUsage.title')}</Typography.H3>
			{renderParagraphs('personalData.dataUsage.content_0')}
			{renderList('personalData.dataUsage.list_0')}
			{renderParagraphs('personalData.dataUsage.content_1')}
			{renderList('personalData.dataUsage.list_1')}
			<Typography.H3>{t('personalData.retention.title')}</Typography.H3>
			{renderParagraphs('personalData.retention.content_0')}
			<Typography.H3>{t('personalData.transfer.title')}</Typography.H3>
			{renderParagraphs('personalData.transfer.content_0')}
			<Typography.H3>{t('personalData.disclosure.title')}</Typography.H3>
			<Typography.H4>{t('personalData.disclosure.businessTransactions.title')}</Typography.H4>
			{renderParagraphs('personalData.disclosure.businessTransactions.content_0')}
			<Typography.H4>{t('personalData.disclosure.lawEnforcement.title')}</Typography.H4>
			{renderParagraphs('personalData.disclosure.lawEnforcement.content_0')}
			<Typography.H4>{t('personalData.disclosure.other.title')}</Typography.H4>
			{renderParagraphs('personalData.disclosure.other.content_0')}
			{renderList('personalData.disclosure.other.list_0')}
			<Typography.H3>{t('personalData.security.title')}</Typography.H3>
			{renderParagraphs('personalData.security.content_0')}
			{/*	Children's Privacy */}
			<Typography.H2>{t('children.title')}</Typography.H2>
			{renderParagraphs('children.content_0')}
			{/*	Links to Other Websites */}
			<Typography.H2>{t('links.title')}</Typography.H2>
			{renderParagraphs('links.content_0')}
			{/*	Changes to this Privacy Policy */}
			<Typography.H2>{t('changes.title')}</Typography.H2>
			{renderParagraphs('changes.content_0')}
			{/*	Contact Us */}
			<Typography.H2>{t('contact.title')}</Typography.H2>
			{renderParagraphs('contact.content_0')}
			{renderList('contact.list_0')}
		</ArticleLayout>
	);
};

export const getStaticProps: GetStaticProps<TProps> = async ({ locale }) => ({
	props: {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		...(await serverSideTranslations(locale!)),
	},
});

export default Privacy;
