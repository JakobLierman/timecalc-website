import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	flex-grow: 1;
`;

export default {
	Container,
	Content,
};
