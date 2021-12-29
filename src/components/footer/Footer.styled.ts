import styled from 'styled-components';
import { device } from '@/styles/screenSize';

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.dark};
	padding: ${({ theme }) => theme.margins.huge}px ${({ theme }) => theme.margins.large}px;

	@media (${device.tablet}) {
		padding: ${({ theme }) => theme.margins.huge}px ${({ theme }) => 4 * theme.margins.large}px;
	}
`;

const Content = styled.div`
	max-width: ${({ theme }) => theme.maxWidth}px;
	color: ${({ theme }) => theme.colors.light};

	display: flex;
	flex-direction: column;
`;

const FirstSection = styled.div`
	margin-bottom: ${({ theme }) => theme.margins.huge / 2}px;

	> * {
		margin-bottom: ${({ theme }) => theme.margins.normal}px;

		:last-child {
			margin-bottom: unset;
		}
	}

	@media (${device.tablet}) {
		margin-bottom: 0;
		margin-right: ${({ theme }) => theme.margins.huge / 2}px;
	}
`;

const LastSection = styled.div`
	margin-top: ${({ theme }) => theme.margins.huge / 2}px;

	@media (${device.tablet}) {
		margin-top: 0;
		margin-left: ${({ theme }) => theme.margins.huge / 2}px;
	}
`;

const Title = styled.p`
	font-size: ${({ theme }) => theme.fonts.sizes.large}px;
	font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

const SmallText = styled.p`
	font-size: ${({ theme }) => theme.fonts.sizes.small}px;

	@media (${device.tablet}) {
		text-align: right;
	}
`;

const Icons = styled.div`
	> :not(:last-child) {
		margin-right: ${({ theme }) => theme.margins.normal}px;
	}
`;

export default { Container, Content, FirstSection, LastSection, Title, SmallText, Icons };
