import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global.styled';
import { defaultTheme } from '@/styles/theme/default.theme';

const App: FC<AppProps> = ({ Component, pageProps }) => (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
);

export default appWithTranslation(App);
