import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { getYear } from 'date-fns';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { UrlObject } from 'url';
import { IconType } from 'react-icons';
import { EI18nNamespace } from '@public/locales/i18n.type';
import { TComponentProps } from '@/components/component.types';
import FooterIcon from '@/components/footerIcon/FooterIcon.component';
import Styled from './Footer.styled';

type TProps = TComponentProps;

type TFooterIcon = {
	name: string;
	href: string | UrlObject;
	component: IconType;
};

const Footer: FC<TProps> = ({ className }) => {
	const { t } = useTranslation(EI18nNamespace.Common);
	const year = getYear(new Date());

	const iconValues: TFooterIcon[] = [
		// TODO: Enable website in footer
		// {
		// 	name: 'Website',
		// 	href: 'https://jakoblierman.be',
		// 	component: AiFillHome,
		// },
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/jakoblierman/',
			component: AiFillLinkedin,
		},
		{
			name: 'GitHub',
			href: 'https://github.com/JakobLierman',
			component: AiFillGithub,
		},
	];

	return (
		<Styled.Container className={className}>
			<Styled.Content>
				<Styled.FirstSection>
					<Styled.Title>{t('name')}</Styled.Title>
					<p>{t('author')}</p>
					<Styled.Icons>
						{iconValues.map(({ name, href, component }) => (
							<FooterIcon key={name} href={href} iconComponent={component} />
						))}
					</Styled.Icons>
				</Styled.FirstSection>
				<Styled.LastSection>
					<Styled.SmallText>
						{t('copyright')} &copy; {year.toString(10)}
					</Styled.SmallText>
				</Styled.LastSection>
			</Styled.Content>
		</Styled.Container>
	);
};

export default Footer;
