import React, { FC } from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';
import { IconType } from 'react-icons';
import { TComponentProps } from '@/components/component.types';
import Styled from './FooterIcon.styled';

type TProps = TComponentProps & {
	href: string | UrlObject;
	iconComponent: IconType;
};

const FooterIcon: FC<TProps> = ({ href, iconComponent: Icon, className }) => (
	<Link href={href} passHref={true}>
		<Styled.IconLink className={className}>
			<Icon size={25} />
		</Styled.IconLink>
	</Link>
);

export default FooterIcon;
