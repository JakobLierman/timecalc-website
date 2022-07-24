import { type ComponentProps, type FC, useEffect } from 'react';
import GoogleTagManager from 'react-gtm-module';
import TagManagerUtils from '@/utils/tagManager.utils';

type TProps = Pick<ComponentProps<'div'>, 'children'>;

const TagManager: FC<TProps> = ({ children }) => {
	useEffect(() => {
		GoogleTagManager.initialize(TagManagerUtils.tagManagerArgs);
	}, []);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
};

export default TagManager;
