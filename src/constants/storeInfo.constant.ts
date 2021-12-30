import { UrlObject } from 'url';
import appStoreBadge from '@public/vectors/app-store-badge.svg';
import playStoreBadge from '@public/vectors/play-store-badge.svg';

export enum EStoreType {
	GooglePlayStore = 'google-play-store',
	AppleAppStore = 'apple-app-store',
}

type TStoreInfo = {
	badgeImage: any;
	url: string | UrlObject;
};

const storeInfo: Record<EStoreType, TStoreInfo> = {
	[EStoreType.AppleAppStore]: {
		badgeImage: appStoreBadge,
		url: 'https://apps.apple.com/be/app/timecalc-delay-time-programs/id1601045398',
	},
	[EStoreType.GooglePlayStore]: {
		badgeImage: playStoreBadge,
		url: 'https://play.google.com/store/apps/details?id=be.jakoblierman.timecalc',
	},
};

export default storeInfo;
