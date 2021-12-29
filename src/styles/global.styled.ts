import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		background-color: ${({ theme }) => theme.colors.light};
	}

	* {
		box-sizing: border-box;
		font-family: ${({ theme }) => theme.fonts.default};
	}

	a {
		color: inherit;
		text-decoration: inherit;
		transition: opacity ${({ theme }) => theme.animations.transitionDuration}ms ease-in-out;

		:hover {
			opacity: .7;
		}
	}

	p {
		margin: 0;
	}

	::selection {
	}
`;

export default GlobalStyle;
