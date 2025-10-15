import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  border: 1px solid #ccccccff;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;
export const ContainerLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-top: 10%;
  color: white;
`;
export const SubTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 10%;
  color: #c0c0c0ff;
`;
export const NavContainer = styled.div`
  position: absolute;
  bottom: 10%;
`;
