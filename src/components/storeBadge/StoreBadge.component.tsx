import { FC } from 'react';
import { UrlObject } from 'url';
import Link from 'next/link';
import { TComponentProps } from '@/components/component.types';
import Image from '@/components/image/Image.component';
import Styled from './StoreBadge.styled';

type TProps = TComponentProps & {
	imageSrc: StaticImageData;
	url: string | UrlObject;
};

const StoreBadge: FC<TProps> = ({ imageSrc, url, className }) => (
	<Link href={url} passHref={true}>
		<Styled.Anchor className={className}>
			<Image src={imageSrc} />
		</Styled.Anchor>
	</Link>
);

export default StoreBadge;
