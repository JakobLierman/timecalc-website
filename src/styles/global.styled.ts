import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
		scroll-behavior: smooth;
		background-color: ${({ theme }) => theme.colors.dark};
	}

	body {
		background-color: ${({ theme }) => theme.colors.light};
	}

	#__next {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-x: hidden;
	}

	html, body {
		margin: 0;
		padding: 0;
		color: ${({ theme }) => theme.colors.dark};
		font-family: ${({ theme }) => theme.fonts.default};
		white-space: pre-line;
	}

	* {
		box-sizing: border-box;
		vertical-align: baseline;
		font-family: inherit;
	}

	a {
		cursor: pointer;
		color: inherit;
		text-decoration: inherit;
		transition: opacity ${({ theme }) => theme.animations.transitionDuration}ms ease-in-out;

		:hover {
			opacity: .7;
		}
	}
`;

export default GlobalStyle;
