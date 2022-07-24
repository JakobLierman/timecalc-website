import { type ComponentProps, type FC } from 'react';
import { type UrlObject } from 'url';
import Link from 'next/link';
import { type StaticImageData } from 'next/image';
import Image from '@/components/image/Image.component';
import Styled from './StoreBadge.styled';

type TProps = Pick<ComponentProps<'a'>, 'className'> & {
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
