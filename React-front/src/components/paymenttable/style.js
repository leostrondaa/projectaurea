import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.969);
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.53);
  gap: 20px;
  padding: 5%;
  min-height: 100vh;
  border: 1px solid #ccccccff;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  min-width: 100%;
`;

export const Orbit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: transparent;
`;
export const ContainerLine = styled.div`
  display: flex;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-left: 20px;
  color: #c0c0c0ff;
`;

export const Label = styled.label`
  font-size: 18px;
  border: 10px;
  color: white;
  margin-top: 10%;
`;
export const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  background-color: #1e1e1ecb;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
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

export const Button2 = styled.button`
  box-sizing: border-box;
  width: 10%;
  height: 35px;
  background-color: #1e1e1ecb;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: grab;
  transition: all 0.2s ease-in-out;
  position: absolute;
  bottom: 10%;
  right: 5%;

  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: #252525ff;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const InputKey = styled.input`
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid gray;
  padding: 5px;
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.81);
    transition: all 0.1s ease-in-out;
    border: 2px solid gray;
  }
`;

export const InputValue = styled.input`
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid gray;
  padding: 5px;
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.81);
    transition: all 0.1s ease-in-out;
    border: 2px solid gray;
  }
`;
