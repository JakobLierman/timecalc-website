import React, { FC, useEffect } from 'react';
import GoogleTagManager from 'react-gtm-module';
import { TComponentProps } from '@/components/component.types';
import TagManagerUtils from '@/utils/tagManager.utils';

type TProps = TComponentProps;

const TagManager: FC<TProps> = ({ children }) => {
	useEffect(() => {
		GoogleTagManager.initialize(TagManagerUtils.tagManagerArgs);
	}, []);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
};

export default TagManager;
