import { type ComponentProps } from 'react';

export type TLayoutProps = Omit<ComponentProps<'div'>, 'ref'> & {
	title?: string;
	description?: string;
	keywords?: string;
	author?: string;
};
