import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OrbitProgress } from 'react-loading-indicators';
import UserContext from '../../contexts/UserContext';
import { Client, setToken, testConnection } from '../../api/client';
import { setPermissions } from '../../service/PermissionService';
import { setDataUser } from '../../service/UserService';
import {
  Container,
  Title,
  Label,
  InputPassword,
  InputEmail,
  MsgBox,
  SendBox,
  Submit,
  LinkForgot,
  ContainerLine,
} from './style';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function Authenticate() {
    const user = { email: email, password: password };

    setView(false);
    setLoad(true);

    setTimeout(() => {
      Client.post('/auth/login', user)
        .then((res) => {
          const load = res.data;
          console.log(load);
          setUser(load.user);
          setDataUser(load.user);
          setToken(load.token.value);
          setPermissions(load.permissions);

          if (load.user.papel_id === 1) {
            navigate('/admin');
          } else if (load.user.papel_id === 2) {
            navigate('/home');
          } else {
            alert('Login invalido');
          }
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

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <Container>
      <ContainerLine>
        <Title>Olá!</Title>
      </ContainerLine>

      {load ? (
        <OrbitProgress
          variant="spokes"
          color="#ffffffff"
          size="small"
          text=""
        />
      ) : (
        <ContainerLine>
          <Label>E-mail</Label>
          <InputEmail
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <InputPassword
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {view ? (
            <MsgBox>
              <p>Usuário ou Senha Inválidos!</p>
            </MsgBox>
          ) : (
            ''
          )}

          <SendBox>
            <Submit value="Autenticar" onClick={() => Authenticate()} />
            <LinkForgot onClick={() => navigate('/login')}>
              Esqueceu
              <br />
              sua senha?
            </LinkForgot>
          </SendBox>
        </ContainerLine>
      )}
    </Container>
  );
}
