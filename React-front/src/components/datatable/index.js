import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { OrbitProgress } from 'react-loading-indicators';
import UserContext from '../../contexts/UserContext';
import { Client, setToken } from '../../api/client';
import { setPermissions } from '../../service/PermissionService';
import { setDataUser } from '../../service/UserService';
import { Container, Title, MsgBox, SendBox, Button } from './style';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  // TESTE
  function Authenticate() {
    const user = { email: email, password: password };
    setView(false);
    setLoad(true);

    setTimeout(() => {
      Client.post('auth/login', user)
        .then((res) => {
          const load = res.data;
          console.log(load);
          setUser(load.user);
          setDataUser(load.user);
          setToken(load.token.value);
          setPermissions(load.permissions);
          navigate('/home');
        })
        .catch(function (error) {
          setView(true);
          console.log(error);
        })
        .finally(() => {
          setLoad(false);
        });
    }, 1000);
  }

  return (
    <Container>
      <Title>BANIF bank</Title>
      <>
        <Button>Transferência</Button>
        <Button>Sair</Button>
      </>
    </Container>
  );
}
