// https://jsramblings.com/how-to-use-media-queries-with-styled-components/

/**
 * Screen size breakpoints, as found in Chrome DevTools
 */
export const screenSize = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560,
};

/**
 * Media query options for device screen sizes (using min-width)
 */
export const device = {
	mobileS: `min-width: ${screenSize.mobileS}px`,
	mobileM: `min-width: ${screenSize.mobileM}px`,
	mobileL: `min-width: ${screenSize.mobileL}px`,
	tablet: `min-width: ${screenSize.tablet}px`,
	laptop: `min-width: ${screenSize.laptop}px`,
	laptopL: `min-width: ${screenSize.laptopL}px`,
	desktop: `min-width: ${screenSize.desktop}px`,
	desktopL: `min-width: ${screenSize.desktop}px`,
};
