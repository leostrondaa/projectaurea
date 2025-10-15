import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.969);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5%;
  min-height: 100vh;
  border: 1px solid #ccccccff;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  min-width: 100%;
`;
export const Container2 = styled.div`
  background-color: rgba(38, 38, 38, 1);
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  gap: 20px;
  height: 530px;
  width: 100%;
`;
export const ContainerLine = styled.div`
  display: flex;
  gap: 20px;
`;
export const Orbit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  border: 2px solid #ccccccff;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.969);
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-left: 20px;
  color: #c0c0c0ff;
`;

export const SubTitle = styled.h1`
  margin-bottom: 9%;
  margin-left: 20px;
  font-size: 50px;
  color: #c0c0c0ff;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  border: 10px;
  padding: 20px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  background-color: #ffffffac;
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5%;
  border: none;
  border-radius: 10px;
  cursor: grab;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: #ddddddff;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;
export const Button2 = styled.button`
  box-sizing: border-box;
  width: 9%;
  height: 45px;
  background-color: #1e1e1ecb;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  cursor: grab;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: #252525ff;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;
export const Button3 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 50%;
  height: 80px;
  background-color: #1e1e1ecb;
  color: white;
  font-size: 50px;
  font-weight: bold;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  cursor: grab;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: #252525ff;
    transform: translateY(-2px);

    img {
      transform: translateX(-40px);
    }
    span {
      transform: translateX(40%);
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }

  span {
    position: absolute;
    font-size: 16px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  img {
    width: 50px;
    height: 50px;
    transition: all 0.3s ease-in-out;
  }
`;
