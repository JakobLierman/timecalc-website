import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';
import GenericLayout from '@/layouts/generic/Generic.layout';

type TProps = SSRConfig;

const Home: NextPage<TProps> = () => (
	<GenericLayout>
		<p>Homepage</p>
	</GenericLayout>
);

export const getStaticProps: GetStaticProps<TProps> = async ({ locale }) => ({
	props: {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		...(await serverSideTranslations(locale!)),
	},
});

export default Home;
