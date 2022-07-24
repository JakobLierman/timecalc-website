import { type FC } from 'react';
import { type TLayoutProps } from '@/layouts/layout.types';
import Styled from './Article.styled';

type TProps = TLayoutProps;

const ArticleLayout: FC<TProps> = ({ className, children, ...props }) => (
	<Styled.Layout {...props}>
		<Styled.Container className={className}>
			<Styled.HomeButton />
			{children}
		</Styled.Container>
	</Styled.Layout>
);

export default ArticleLayout;
