import { type ComponentProps, type FC } from 'react';
import NextImage, { type ImageProps } from 'next/image';

type TProps = ComponentProps<'div'> & ImageProps;

const Image: FC<TProps> = ({ className, ...props }) => (
	<div className={className}>
		<NextImage {...props} />
	</div>
);

export default Image;
