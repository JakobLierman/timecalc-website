import React, { FC } from 'react';
import NextImage, { ImageProps } from 'next/image';
import { TComponentProps } from '@/components/component.types';

type TProps = TComponentProps & ImageProps;

const Image: FC<TProps> = ({ className, ...props }) => (
	<div className={className}>
		<NextImage {...props} />
	</div>
);

export default Image;
