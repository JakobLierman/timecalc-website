export default class ColorUtils {
	/**
	 * Checks whether or not the hex color value has a valid format
	 *
	 * @param hexColorValue
	 */
	private static isValidHexColor = (hexColorValue: string): boolean => {
		const hexColorRegex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');

		return hexColorRegex.test(hexColorValue);
	};

	/**
	 * Converts short hex color format to long hex color format
	 *
	 * @param shortHexColorValue
	 */
	public static shortToLongHex = (shortHexColorValue: string): string => {
		if (!ColorUtils.isValidHexColor(shortHexColorValue)) {
			throw new Error('Invalid hex color');
		}

		return `#${shortHexColorValue.charAt(1)}${shortHexColorValue.charAt(
			1,
		)}${shortHexColorValue.charAt(2)}${shortHexColorValue.charAt(2)}${shortHexColorValue.charAt(
			3,
		)}${shortHexColorValue.charAt(3)}`;
	};

	/**
	 * Adds alpha value to hex color
	 *
	 * @param hexColorValue
	 * @param alpha
	 */
	public static addAlphaToHex = (hexColorValue: string, alpha: number): string => {
		if (!ColorUtils.isValidHexColor(hexColorValue)) throw new Error('Invalid hex color');
		if (alpha > 1 || alpha < 0) throw new Error('Invalid alpha value');

		let hex = hexColorValue;
		if (hexColorValue.length < 6) hex = ColorUtils.shortToLongHex(hexColorValue);

		return `${hex}${Math.round(255 * alpha).toString(16)}`;
	};
}
