import { type ComponentProps, type FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { EI18nNamespace } from '@public/locales/i18n.type';
import Link from 'next/link';
import Styled from './BackButton.styled';

type TProps = Pick<ComponentProps<'button'>, 'className' | 'children'> & {
	goHome?: boolean;
};

const BackButton: FC<TProps> = ({ goHome = false, className, children }) => {
	const { t } = useTranslation(EI18nNamespace.Common);
	const { back } = useRouter();

	const content = (
		<Styled.ContainerAnchor
			onClick={() => {
				if (!goHome) back();
			}}
			className={className}>
			<Styled.Icon />
			{children || goHome ? t('goHome') : t('goBack')}
		</Styled.ContainerAnchor>
	);

	return goHome ? (
		<Link href="/" passHref={true}>
			{content}
		</Link>
	) : (
		content
	);
};

export default BackButton;
