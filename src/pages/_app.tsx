import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import { EI18nNamespace } from '@public/locales/i18n.type';
import { useRouter } from 'next/router';
import GlobalStyle from '@/styles/global.styled';
import { defaultTheme } from '@/styles/theme/default.theme';
import TagManager from '@/components/tagManager/TagManager.component';
import SEO from '@/constants/next-seo.config';

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const { t } = useTranslation(EI18nNamespace.Common);
	const router = useRouter();

	return (
		<TagManager>
			<ThemeProvider theme={defaultTheme}>
				<DefaultSeo {...SEO(t, router)} />
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</TagManager>
	);
};

export default appWithTranslation(App);
