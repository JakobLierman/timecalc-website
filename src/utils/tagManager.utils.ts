import { TagManagerArgs } from 'react-gtm-module';

export enum EEventName {
	PreferencesChanged = 'preferences_changed',
}

export default class TagManagerUtils {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	private static GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!;

	private static GTM_AUTH = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_AUTH;

	private static GTM_PREVIEW = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_PREVIEW;

	public static get tagManagerArgs(): TagManagerArgs {
		return {
			gtmId: TagManagerUtils.GTM_ID,
			auth: TagManagerUtils.GTM_AUTH,
			preview: TagManagerUtils.GTM_PREVIEW,
		};
	}

	public static variable = (variable: Record<string, string>): void => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push(variable);
	};

	public static event = (eventName: EEventName): void => {
		TagManagerUtils.variable({ event: eventName });
	};
}
