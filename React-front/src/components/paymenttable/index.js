import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OrbitProgress } from 'react-loading-indicators';
import IconPig from '../../images/pig.png';
import IconBank from '../../images/bank.png';
import UserContext from '../../contexts/UserContext';
import { Client, setToken } from '../../api/client';
import { setPermissions } from '../../service/PermissionService';
import { setDataUser } from '../../service/UserService';

import {
  Container,
  Title,
  Orbit,
  Button,
  ContainerLine,
  InputKey,
  InputValue,
  Button2,
  Label,
} from './style';

export default function PaymentTable() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [load, setLoad] = useState(false);
  const [viewData, setViewData] = useState(false);
  const [viewContainer, setViewContainer] = useState(true);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function ShowContainer() {
    setViewContainer((prev) => !prev);
  }

  function buscarConta() {
    setLoad(true);
    Client.get(`/transacao/conta/${key}`)
      .then((response) => {
        const conta = response.data;
        console.log('Conta encontrada:', conta);
        setDestinatario(conta.key);
      })
      .catch((error) => {
        alert('Conta não encontrada!');
        console.error(error);
      })
      .finally(() => setLoad(false));
  }

  async function transferir() {
    setLoad(true);
    try {
      const remetenteId = user.id;
      const valorNumerico = parseFloat(value.replace(',', '.'));

      const response = await Client.post('/transacao', {
        remetenteId,
        destinatarioId: key,
        valor: valorNumerico,
      });

      alert(response.data.message);
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Erro na transferência');
    } finally {
      setLoad(false);
    }
  }

  return load ? (
    <Container>
      <Orbit>
        <OrbitProgress
          variant="spokes"
          color="#ffffffff"
          size="small"
          text=""
        />
      </Orbit>
    </Container>
  ) : (
    <>
      {viewContainer ? (
        <>
          <Container>
            <Title>Transferir</Title>
            <Label>Chave de transferência</Label>
            <InputKey
              placeholder="CPF ou Email"
              value={key}
              onChange={(e) => {
                setKey(e.target.value);
              }}
            />
            {/*Se digitou algo...*/}
            {/*...Se a chave existe*/}
            {key ? (
              key !== null ? (
                <ContainerLine>
                  <p>Nome:</p>
                  <p>Leonardo Henz</p>
                  <p>Cpf:</p>
                  <p>123456789</p>
                </ContainerLine>
              ) : (
                <p>Conta inexistente</p>
              )
            ) : (
              ''
            )}
            <Button
              onClick={() => {
                ShowContainer();
                buscarConta();
              }}
            >
              Confirmar
            </Button>
            <ContainerLine>
              <Button2 onClick={() => navigate('/home')}>Voltar</Button2>
            </ContainerLine>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Title>Transferir</Title>
            <Label>Selecione o valor</Label>
            <InputValue
              type="text"
              value={'R$ ' + value}
              onChange={(e) => {
                const text = e.target.value.replace(/^R\$\s*/, '');
                setValue(text);
              }}
            />
            <Button
              onClick={() => {
                transferir();
                navigate('/home');
              }}
            >
              Confirmar
            </Button>
          </Container>
          <Container>
            <ContainerLine>
              <Button2 onClick={ShowContainer}>
                <span>Voltar</span>
              </Button2>
            </ContainerLine>
          </Container>
        </>
      )}
    </>
  );
}
