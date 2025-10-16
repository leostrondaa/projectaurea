import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.95); /* 50% de transparência */
  border-radius: 8px;
  padding: 50px;
  display: flex;

  align-items: center;
  border-radius: 16px;
  border: 1px solid #ccccccff;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 600px;
`;
export const ContainerLine = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: white;
  margin-bottom: -50px;
`;

export const Label = styled.label`
  font-size: 15px;
  color: white;
  margin-top: 40px;
  margin-bottom: 5px;
`;

export const InputEmail = styled.input.attrs({ type: 'email' })`
  background-color: rgba(97, 97, 97, 0.53);
  display: inline-block;
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border: 1px solid gray;

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.55);
    transition: all 0.1s ease-in-out;
    border: 2px solid gray;
  }
`;

export const InputPassword = styled.input.attrs({ type: 'password' })`
  background-color: rgba(97, 97, 97, 0.53);

  display: inline-block;
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border: 1px solid gray;
  margin-bottom: 50px;

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.55);
    transition: all 0.1s ease-in-out;
    border: 2px solid gray;
  }
`;

export const SendBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #555;
`;

export const MsgBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  width: 100%;
  padding-top: 10px;
  color: red;
`;

export const Submit = styled.input.attrs({ type: 'submit' })`
  box-sizing: border-box;
  width: 130px;
  height: 35px;
  background-color: #ffffffff;
  color: black;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 20px;
  border: none;
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

export const LinkForgot = styled.a`
  text-decoration: none;
  cursor: grab;
  font-size: 14px;
  margin-top: 10px;
  color: white;
  font-weight: 600;
  padding-top: 7px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #cccccccc;
    transition: all 0.2s ease-in-out;
  }
`;
