import styled from 'styled-components';
import GenericLayout from '@/layouts/generic/Generic.layout';
import { device } from '@/styles/screenSize';
import BackButton from '@/components/backButton/BackButton.component';

const Layout = styled(GenericLayout)`
	background-color: ${({ theme }) => theme.colors.dark};
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: ${({ theme }) => theme.maxWidth}px;
	color: ${({ theme }) => theme.colors.light};
	padding: ${({ theme }) => theme.margins.huge}px ${({ theme }) => theme.margins.large}px;

	@media (${device.tablet}) {
		padding: ${({ theme }) => theme.margins.huge}px;
	}

	@media (${device.laptop}) {
		padding: ${({ theme }) => theme.margins.huge}px ${({ theme }) => 4 * theme.margins.large}px;
	}
`;

const HomeButton = styled(BackButton).attrs(() => ({
	goHome: true,
}))`
	margin-bottom: ${({ theme }) => theme.margins.large}px;

	@media (${device.tablet}) {
		margin-bottom: ${({ theme }) => theme.margins.huge}px;
	}
`;

export default { Layout, Container, HomeButton };
