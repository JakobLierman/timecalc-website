import styled from 'styled-components';
import ImageComponent from '@/components/image/Image.component';
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
	height: 100vh;

	@media (${device.tablet}) {
		height: unset;
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

const ImageWrap = styled.div<{ inline: boolean }>`
	display: ${({ inline }) => (inline ? 'flex' : 'none')};
	max-height: 100vh;

	@media (${device.tablet}) {
		display: ${({ inline }) => (inline ? 'none' : 'flex')};
		width: 50%;
	}
`;

const Image = styled(ImageComponent).attrs(() => ({
	placeholder: 'blur',
	quality: 100,
	priority: true,
	layout: 'responsive',
}))`
	flex-direction: column;
	padding: ${({ theme }) => theme.margins.large}px;
	margin: auto 0;
	flex-grow: 1;
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

export default { Layout, Container, Content, Title, Subtitle, Text, ImageWrap, Image, Badges };
