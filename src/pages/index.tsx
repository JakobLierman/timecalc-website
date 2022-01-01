import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig, useTranslation } from 'next-i18next';
import mockupHand from '@public/images/mockup-hand.webp';
import { EI18nNamespace } from '@public/locales/i18n.type';
import Styled from '@/styles/pages/index.styled';
import storeInfo, { EStoreType } from '@/constants/storeInfo.constant';
import StoreBadge from '@/components/storeBadge/StoreBadge.component';

type TProps = SSRConfig;

const Home: NextPage<TProps> = () => {
	const { t } = useTranslation([EI18nNamespace.Common, EI18nNamespace.Home]);

	return (
		<Styled.Layout>
			<Styled.Container>
				<Styled.ImageWrap inline={false}>
					<Styled.Image src={mockupHand} alt={t(`${EI18nNamespace.Home}:imageAlt`)} />
				</Styled.ImageWrap>
				<Styled.Content>
					<Styled.Title>{t(`${EI18nNamespace.Common}:name`)}</Styled.Title>
					<Styled.Subtitle>{t(`${EI18nNamespace.Home}:subtitle`)}</Styled.Subtitle>
					<Styled.ImageWrap inline={true}>
						<Styled.Image src={mockupHand} alt={t(`${EI18nNamespace.Home}:imageAlt`)} />
					</Styled.ImageWrap>
					<Styled.Text inline={true}>{t(`${EI18nNamespace.Home}:description`)}</Styled.Text>
					<Styled.Badges>
						{Object.keys(storeInfo).map((storeType) => (
							<StoreBadge
								key={storeType}
								imageSrc={storeInfo[storeType as EStoreType].badgeImage}
								url={storeInfo[storeType as EStoreType].url}
							/>
						))}
					</Styled.Badges>
				</Styled.Content>
				<Styled.Text inline={false}>{t(`${EI18nNamespace.Home}:description`)}</Styled.Text>
			</Styled.Container>
		</Styled.Layout>
	);
};

export const getStaticProps: GetStaticProps<TProps> = async ({ locale }) => ({
	props: {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		...(await serverSideTranslations(locale!)),
	},
});

export default Home;
