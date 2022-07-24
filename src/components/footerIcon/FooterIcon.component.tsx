import { type ComponentProps, type FC } from 'react';
import Link, { type LinkProps } from 'next/link';
import { type UrlObject } from 'url';
import { type IconType } from 'react-icons';
import Styled from './FooterIcon.styled';

type TProps = Omit<LinkProps, 'href'> &
	Pick<ComponentProps<'div'>, 'className'> & {
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
