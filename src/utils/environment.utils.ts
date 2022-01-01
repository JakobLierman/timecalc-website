export default class EnvironmentUtils {
	/**
	 * Whether this is a production instance
	 */
	public static isProduction = (): boolean => {
		const envVars: (string | undefined)[] = [
			process.env.NODE_ENV,
			process.env.NEXT_PUBLIC_NODE_ENV,
			process.env.VERCEL_ENV,
			process.env.NEXT_PUBLIC_VERCEL_ENV,
		];

		return envVars.some((v) => !!v && v.toLowerCase() === 'production');
	};
}
