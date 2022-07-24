import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
	render = (): JSX.Element => (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default Document;
