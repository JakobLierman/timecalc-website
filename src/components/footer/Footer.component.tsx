import { type ComponentProps, type FC } from 'react';
import { useTranslation } from 'next-i18next';
import { getYear } from 'date-fns';
import { EI18nNamespace } from '@public/locales/i18n.type';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import FooterIcon from '@/components/footerIcon/FooterIcon.component';
import iconValues, { type TFooterIcon } from '@/constants/footerIcons.constant';
import linkValues, { type TFooterLink } from '@/constants/footerLinks.constant';
import Styled from './Footer.styled';

type TProps = ComponentProps<'footer'>;

const Footer: FC<TProps> = ({ className }) => {
	const { t } = useTranslation([EI18nNamespace.Common, EI18nNamespace.Footer]);
	const year = getYear(new Date());

	const renderFooterIcon = ({ name, href, component }: TFooterIcon): JSX.Element => (
		<FooterIcon key={name} href={href} iconComponent={component} />
	);

	const renderFooterLink = ({ name, href, external }: TFooterLink): JSX.Element => (
		<Link key={name} href={href} passHref={true}>
			<Styled.Anchor>
				{external && <BiLinkExternal />}
				<span>{t(`${EI18nNamespace.Footer}:${name}`)}</span>
			</Styled.Anchor>
		</Link>
	);

	return (
		<Styled.Container className={className}>
			<Styled.Content>
				<Styled.FirstSection>
					<Styled.Title>{t(`${EI18nNamespace.Common}:name`)}</Styled.Title>
					<Styled.Subtitle>{t(`${EI18nNamespace.Common}:author`)}</Styled.Subtitle>
					<Styled.Icons>{iconValues.map(renderFooterIcon)}</Styled.Icons>
				</Styled.FirstSection>
				<Styled.LastSection>
					{linkValues.map(renderFooterLink)}
					<Styled.SmallText>
						{t(`${EI18nNamespace.Footer}:copyright`)} {year.toString(10)}
					</Styled.SmallText>
				</Styled.LastSection>
			</Styled.Content>
		</Styled.Container>
	);
};

export default Footer;
