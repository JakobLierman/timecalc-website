declare namespace globalThis {
	interface Window {
		dataLayer: Record<string, string>[];
	}
}
