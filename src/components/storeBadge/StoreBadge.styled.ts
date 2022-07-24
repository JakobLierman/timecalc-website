import styled from 'styled-components';

const Anchor = styled.a.attrs({ target: '_blank', rel: 'nofollow noopener noreferrer' })`
	:hover {
		opacity: unset;
	}
`;

export default {
	Anchor,
};
