import styled from 'styled-components';
import { device } from '@/styles/screenSize';

const Container = styled.div`
	display: flex;
	justify-content: center;

	background-color: ${({ theme }) => theme.colors.dark};
	padding: ${({ theme }) => theme.margins.huge}px ${({ theme }) => theme.margins.large}px;

	@media (${device.tablet}) {
		padding: ${({ theme }) => theme.margins.huge}px;
	}

	@media (${device.laptop}) {
		padding: ${({ theme }) => theme.margins.huge}px ${({ theme }) => 4 * theme.margins.large}px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	max-width: ${({ theme }) => theme.maxWidth}px;
	color: ${({ theme }) => theme.colors.light};

	> * {
		flex-grow: 1;
	}

	@media (${device.tablet}) {
		flex-direction: row;
	}
`;

const FirstSection = styled.div`
	margin-bottom: ${({ theme }) => theme.margins.huge / 2}px;

	@media (${device.tablet}) {
		margin-bottom: 0;
		margin-right: ${({ theme }) => theme.margins.huge / 2}px;
	}
`;

const LastSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-top: ${({ theme }) => theme.margins.huge / 2}px;

	> :not(:last-child) {
		margin-bottom: ${({ theme }) => theme.margins.normal}px;
	}

	@media (${device.tablet}) {
		margin-top: 0;
		margin-left: ${({ theme }) => theme.margins.huge / 2}px;
		align-items: flex-end;
	}
`;

const Title = styled.p`
	font-size: ${({ theme }) => theme.fonts.sizes.large}px;
	font-weight: ${({ theme }) => theme.fonts.weights.bold};
	margin: 0 0 ${({ theme }) => theme.margins.normal}px;
`;

const Subtitle = styled.p`
	font-size: ${({ theme }) => theme.fonts.sizes.normal}px;
	margin: 0 0 ${({ theme }) => theme.margins.large}px;
`;

const SmallText = styled.p`
	font-size: ${({ theme }) => theme.fonts.sizes.small}px;
	margin: 0;

	@media (${device.tablet}) {
		text-align: right;
	}
`;

const Icons = styled.div`
	> :not(:last-child) {
		margin-right: ${({ theme }) => theme.margins.normal}px;
	}
`;

const Anchor = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;

	> :not(:last-child) {
		margin-right: ${({ theme }) => theme.margins.small}px;
	}
`;

export default {
	Container,
	Content,
	FirstSection,
	LastSection,
	Title,
	Subtitle,
	SmallText,
	Icons,
	Anchor,
};
