import styled from 'styled-components';
import GenericLayout from '@/layouts/generic/Generic.layout';
import { device } from '@/styles/screenSize';
import Typography from '@/styles/typography.styled';

const Layout = styled(GenericLayout)`
	@media (${device.tablet}) {
		background-color: ${({ theme }) => theme.colors.primary};
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: ${({ theme }) => theme.maxWidth}px;

	@media (${device.tablet}) {
		flex-direction: row;
		background-color: ${({ theme }) => theme.colors.primary};
		margin: ${({ theme }) => theme.margins.huge}px;
	}

	@media (${device.laptop}) {
		margin: ${({ theme }) => theme.margins.huge}px ${({ theme }) => 4 * theme.margins.large}px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.colors.light};
	padding: ${({ theme }) => theme.margins.huge}px ${({ theme }) => theme.margins.large}px;
	background-color: ${({ theme }) => theme.colors.primary};
	min-height: 100vh;

	@media (${device.tablet}) {
		min-height: unset;
		background-color: inherit;
		justify-content: center;
		width: 50%;
	}
`;

const Title = styled(Typography.H1)`
	margin: 0 ${({ theme }) => theme.margins.large}px;
	text-align: center;

	@media (${device.tablet}) {
		text-align: inherit;
	}
`;

const Subtitle = styled(Typography.H2)`
	margin: 0 ${({ theme }) => theme.margins.large}px;
	text-align: center;

	@media (${device.tablet}) {
		text-align: inherit;
	}
`;

const Text = styled(Typography.P)<{ inline: boolean }>`
	display: ${({ inline }) => (inline ? 'none' : 'inherit')};
	padding: ${({ theme }) => theme.margins.large}px;
	margin: ${({ theme }) => theme.margins.large}px 0;

	@media (${device.tablet}) {
		display: ${({ inline }) => (inline ? 'inherit' : 'none')};
	}
`;

const Image = styled.img<{ inline: boolean }>`
	display: ${({ inline }) => (inline ? 'flex' : 'none')};
	flex: 1;
	max-width: 100%;
	flex-direction: column;
	padding: ${({ theme }) => theme.margins.large}px;
	object-fit: contain;

	@media (${device.tablet}) {
		display: ${({ inline }) => (inline ? 'none' : 'block')};
		width: 50%;
		margin: auto 0;
		max-height: 70vh;
	}
`;

const Badges = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 ${({ theme }) => theme.margins.large}px;

	> :not(:last-child) {
		margin-bottom: ${({ theme }) => theme.margins.normal}px;
	}

	@media (${device.tablet}) {
		flex-direction: row;

		> :not(:last-child) {
			margin-bottom: 0;
			margin-right: ${({ theme }) => theme.margins.large}px;
		}
	}
`;

export default {
	Layout,
	Container,
	Content,
	Title,
	Subtitle,
	Text,
	Image,
	Badges,
};
