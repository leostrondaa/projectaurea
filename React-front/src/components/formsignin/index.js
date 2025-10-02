import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { OrbitProgress } from "react-loading-indicators";
import UserContext from "../../contexts/UserContext";
import { Client, setToken } from "../../api/client";
import { setPermissions } from "../../service/PermissionService";
import { setDataUser } from "../../service/UserService";
import {
  Container,
  Title,
  Label,
  InputTop,
  InputBottom,
  MsgBox,
  SendBox,
  Submit,
  LinkForgot,
  CreateButton,
  Orbit,
} from "./style";

export default function FormSignin() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [adress, setAdress] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  const [load, setLoad] = useState(false);
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  function Authenticate() {
    const user = {
      cidade: city,
      estado: state,
      rua: adress,
      numero: houseNumber,
    };
    setView(false);

    if (!city || !state || !adress || !houseNumber) {
      setView(1);
      
    } else {
      setLoad(true);
      setTimeout(() => {
        Client.post("users", user)
          .then((res) => {
            navigate("/login");
          })
          .catch(function (error) {
            setView(2);
            console.log(error);
          })
          .finally(() => {
            setLoad(false);
          });
      }, 1000);
    }
  }

  return (
    <Container>
      <Title>Hello world!</Title>
      {load ? (
        <Orbit>
          <OrbitProgress
            variant="spokes"
            color="#cf5387"
            size="small"
            text=""
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            }}
          />
        </Orbit>
      ) : (
        <>
          <InputTop
            id="city"
            name="city"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <InputTop
            id="state"
            name="state"
            placeholder="Estado"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <InputTop
            id="adress"
            name="adress"
            placeholder="Endereço"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />

          <InputBottom
            id="house_number"
            name="house_number"
            placeholder="Número da residência"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />

          {view === 1 && (
            <MsgBox>
              <p>Complete os dados</p>
            </MsgBox>
          )}
          {view === 2 && (
            <MsgBox>
              <p>Dados incorrestos</p>
            </MsgBox>
          )}

          <SendBox>
            <Submit value="Criar" onClick={() => Authenticate()} />
            <CreateButton onClick={() => navigate("/login")}>
              Voltar
            </CreateButton>
          </SendBox>
        </>
      )}
    </Container>
  );
}
