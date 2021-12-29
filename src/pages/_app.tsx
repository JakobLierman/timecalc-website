import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

const App: FC<AppProps> = ({ Component, pageProps }) => (
			<Component {...pageProps} />
);

export default appWithTranslation(App);
