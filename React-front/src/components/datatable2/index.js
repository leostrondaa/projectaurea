import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OrbitProgress } from 'react-loading-indicators';
import IconPix from '../../images/pix.png';
import IconBank from '../../images/bank.png';
import UserContext from '../../contexts/UserContext';
import { Client, setToken } from '../../api/client';
import { setPermissions } from '../../service/PermissionService';
import { setDataUser } from '../../service/UserService';
import {
  Container,
  Title,
  SubTitle,
  Button,
  Button2,
  Button3,
  ContainerLine,
  Container2,
  Orbit,
} from './style';

export default function DataTable() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saldo, setSaldo] = useState(null);
  const [load, setLoad] = useState(true);
  const [viewButton, setViewButton] = useState(false);
  const [viewContainer, setViewContainer] = useState(true);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function ShowContainer() {
    setViewContainer(!viewContainer);
  }

  function ShowButton() {
    setViewButton(!viewButton);
  }

  function Authenticate() {
    const user = { email: email, password: password };
    setViewButton(false);
    setLoad(true);

    setTimeout(() => {
      Client.post('auth/login', user)
        .then((res) => {
          const data = res.data;
          setUser(data.user);
          setDataUser(data.user);
          setToken(data.token.value);
          setPermissions(data.permissions);
          navigate('/home');
        })
        .catch(function (error) {
          setViewButton(true);
          console.log('Erro no login:', error);
        })
        .finally(() => {
          setLoad(false);
        });
    }, 1000);
  }

  function getSaldoReal() {
    Client.get('/conta/saldo')
      .then((res) => {
        setSaldo(res.data.saldo);
      })
      .catch((error) => {
        console.error('Erro ao buscar saldo:', error);
      });
  }

  useEffect(() => {
    Authenticate();
  }, []);

  useEffect(() => {
    if (!load) {
      getSaldoReal();
    }
  }, [load]);

  return load ? (
    <Orbit>
      <OrbitProgress variant="spokes" color="#ffffffff" size="small" text="" />
    </Orbit>
  ) : (
    <>
      <Container>
        {viewContainer ? (
          <>
            <Title>Saldo</Title>
            <ContainerLine>
              {viewButton ? (
                <SubTitle>R$ --.--</SubTitle>
              ) : (
                <SubTitle>
                  {saldo !== null ? (
                    `R$ ${saldo.toFixed(2).replace('.', ',')}`
                  ) : (
                    <OrbitProgress
                      variant="spokes"
                      color="#ffffffff"
                      size="small"
                      text=""
                    />
                  )}
                </SubTitle>
              )}
              <Button2 onClick={ShowButton}>𖠂</Button2>
            </ContainerLine>
            <Button onClick={ShowContainer}>Consultar extrato</Button>
          </>
        ) : (
          <>
            <Container2></Container2>
            <Button onClick={ShowContainer}>Ocultar extrato</Button>
          </>
        )}
        <ContainerLine>
          <Button3 onClick={() => navigate('/payment')}>
            <img src={IconPix} alt="Pix" />
            <span>Pix</span>
          </Button3>
          <Button3 onClick={() => navigate('/application')}>
            <img src={IconBank} alt="Aplicações" />
            <span>Aplicações</span>
          </Button3>
        </ContainerLine>
      </Container>
    </>
  );
}
