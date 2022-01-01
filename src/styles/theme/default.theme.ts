import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
	maxWidth: 1920,
	colors: {
		white: '#FFFFFF',
		black: '#000000',
		primary: '#D7263D',
		light: '#FAFAFA',
		dark: '#020122',
	},
	margins: {
		huge: 24,
		large: 16,
		normal: 8,
		small: 4,
		tiny: 2,
	},
	fonts: {
		default: 'Noto Sans, sans-serif',
		sizes: {
			huge: 48,
			large: 24,
			normal: 16,
			small: 14,
			tiny: 10,
		},
		weights: {
			bold: 700,
			normal: 400,
			small: 200,
		},
	},
	animations: {
		transitionDuration: 200,
	},
	components: {
		// TODO: Add component styling
	},
};
