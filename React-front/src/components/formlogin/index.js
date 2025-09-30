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
    InputPassword,
    InputEmail,
    MsgBox,
    SendBox,
    Submit,
    LinkForgot,
    CreateButton,
    Orbit
} from "./style"

export default function FormLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [view, setView] = useState(false)
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function Authenticate() {

        const user = { email: email, password: password }
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
                        <InputEmail
                            id="email"
                            name="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <InputPassword
                            id="password"
                            name="password"
                            placeholder='Senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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