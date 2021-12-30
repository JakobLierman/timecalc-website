import styled from 'styled-components';

const H1 = styled.h1`
	font-size: ${({ theme }) => theme.fonts.sizes.huge}px;
	font-weight: ${({ theme }) => theme.fonts.weights.bold};
	text-transform: capitalize;
	margin: 0 0 ${({ theme }) => theme.margins.huge}px;
`;

const H2 = styled.h2`
	font-size: ${({ theme }) => theme.fonts.sizes.large}px;
	font-weight: ${({ theme }) => theme.fonts.weights.bold};
	margin: ${({ theme }) => theme.margins.large}px 0;
`;

const H3 = styled.h3`
	font-size: ${({ theme }) => theme.fonts.sizes.normal}px;
	font-weight: ${({ theme }) => theme.fonts.weights.bold};
	text-transform: uppercase;
	margin: ${({ theme }) => theme.margins.normal}px 0;
`;

const H4 = styled.h4`
	font-size: ${({ theme }) => theme.fonts.sizes.normal}px;
	font-weight: ${({ theme }) => theme.fonts.weights.bold};
	margin: ${({ theme }) => theme.margins.normal}px 0;
`;

const P = styled.p`
	font-size: ${({ theme }) => theme.fonts.sizes.normal}px;
	margin-bottom: ${({ theme }) => theme.margins.normal}px;
	line-height: 1.5;
`;

const LI = styled.li`
	font-size: ${({ theme }) => theme.fonts.sizes.normal}px;
	margin-bottom: ${({ theme }) => theme.margins.normal}px;
	line-height: 1.5;
`;

export default { H1, H2, H3, H4, P, LI };
