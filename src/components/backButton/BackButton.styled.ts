import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

const ContainerAnchor = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;

	:hover {
		> :first-child {
			margin-left: -${({ theme }) => theme.margins.tiny}px;
			margin-right: ${({ theme }) => theme.margins.normal + theme.margins.tiny}px;
		}
	}
`;

const Icon = styled(BsArrowLeft)`
	transition: margin ${({ theme }) => theme.animations.transitionDuration}ms ease-in-out;
	margin-right: ${({ theme }) => theme.margins.normal}px;
`;

export default { ContainerAnchor, Icon };
