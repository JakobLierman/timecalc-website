import styled from 'styled-components';
import Typography from '@/styles/typography.styled';

const Subtitle = styled(Typography.P)`
	font-size: ${({ theme }) => theme.fonts.sizes.small}px;
	font-weight: ${({ theme }) => theme.fonts.weights.bold};
	text-transform: uppercase;
	margin-top: -${({ theme }) => theme.margins.large}px;
	margin-bottom: ${({ theme }) => theme.margins.huge}px;
`;

export default { Subtitle };
