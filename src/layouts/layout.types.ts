import { TComponentProps } from '@/components/component.types';

export type TLayoutProps = TComponentProps & {
	title?: string;
	description?: string;
	keywords?: string;
	author?: string;
};
