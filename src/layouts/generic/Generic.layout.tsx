import React, { FC } from 'react';
import Styled from './Generic.styled';

type TProps = TLayoutProps;

const GenericLayout: FC<TProps> = ({
	className,
	children,
}) => {
	return (
			<Styled.Content className={className}>{children}</Styled.Content>
	);
};

export default GenericLayout;
