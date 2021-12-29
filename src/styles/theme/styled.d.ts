import 'styled-components';

type TThemeSizes = {
	huge: number;
	large: number;
	normal: number;
	small: number;
	tiny: number;
};

type TThemeColors = {
	white: string;
	black: string;
	primary: string;
	light: string;
	dark: string;
};

type TThemeMargins = TThemeSizes;

type TThemeFonts = {
	default: string;
	sizes: TThemeSizes;
	weights: TThemeFontWeights;
};

type TThemeFontWeights = {
	bold: number | string;
	normal: number | string;
	small: number | string;
};

type TThemeAnimations = {
	transitionDuration: number;
};

declare module 'styled-components' {
	export interface DefaultTheme {
		maxWidth: number;
		colors: TThemeColors;
		margins: TThemeMargins;
		fonts: TThemeFonts;
		animations: TThemeAnimations;
		components: {
			// TODO: Add component styling
		};
	}
}
