import styled from 'styled-components';
import fundo from '../../images/background.jpg';

export const Container = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100vh;
  overflow: hidden;
`;

export const Left = styled.div`
  background: transparent;
  color: white;
  padding: 1rem;
`;

export const Right = styled.div`
  display: flex;
  padding: 1rem;
`;

export const Orbit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
