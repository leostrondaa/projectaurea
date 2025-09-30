import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { OrbitProgress } from "react-loading-indicators";
import UserContext from '../../contexts/UserContext'
import { Client, setToken } from '../../api/client';
import { setPermissions } from '../../service/PermissionService'
import { setDataUser } from '../../service/UserService'
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
    Orbit
} from "./style"

export default function FormSignin() {

    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [adress, setAdress] = useState('')
    const [houseNumber, setHouseNumber] = useState(false)

    const [load, setLoad] = useState(false)
    const [view, setView] = useState(false)
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function Authenticate() {

        const user = { cidade: city, estado: state, endereco: adress, numero: houseNumber }
        setView(false)
        setLoad(true)

        setTimeout(() => {
            Client.post('auth/login', user).then(res => {
                const load = res.data
                console.log(load)
                setUser(load.user)
                setDataUser(load.user)
                setToken(load.token.value)
                setPermissions(load.permissions)
                navigate('/home')
            })
                .catch(function (error) {
                    setView(true)
                    console.log(error)
                })
                .finally(() => {
                    setLoad(false)
                })

        }, 1000)
    }

    return (

        <Container>
            <Title>Hello world!</Title>
            {
                load
                    ?
                    <Orbit>
                        <OrbitProgress
                            variant="spokes"
                            color="#cf5387"
                            size="small"
                            text=""
                            style={{
                                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            }}
                        />
                    </Orbit>

                    :
                    <>
                        <InputTop
                            id="city"
                            name="city"
                            placeholder='Cidade'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        
                        <InputTop
                            id="state"
                            name="state"
                            placeholder='Estado'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />

                        <InputTop
                            id="adress"
                            name="adress"
                            placeholder='Endereço'
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                        />

                        <InputBottom
                            id="house_number"
                            name="house_number"
                            placeholder='Número da residência'
                            value={houseNumber}
                            onChange={(e) => setHouseNumber(e.target.value)}
                        />

                        {
                            view
                                ?
                                <MsgBox>
                                    <p>Usuário e Senha Inválidos!</p>
                                </MsgBox>
                                :
                                ''
                        }

                        <SendBox>
                            <Submit value="Entrar" onClick={() => Authenticate()} />
                            <CreateButton onClick={() => navigate('/create')}>Criar conta</CreateButton>
                            <LinkForgot onClick={() => navigate('/login')}> Esqueceu sua senha?</LinkForgot>
                        </SendBox>
                    </>
            }
        </Container>
    )
} 