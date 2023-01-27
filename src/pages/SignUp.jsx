import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import logo from "../assets/images/logo.png"
import useRegister from "../hooks/api/useRegister";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { registerLoading, register } = useRegister();
  const navigate = useNavigate();

  async function submitRegister(){
    if(password !== passwordConfirm){
      toast("Senhas não são iguais!");
    } else {
      const registerData = {
        name,
        email,
        password
      }
      try {
        await register(registerData);
        toast("Cadastro realizad!");
        navigate('/');  
      } catch (error) {
        toast("Erro nas informações!");
      }
    }
  }

  return (
    <SignUpWrapper>
      <LogoWrapper>
        <img src={logo} alt='Risuto'/>
      </LogoWrapper>
      <FormsWrapper>
        <input
          placeholder="Nome Completo"
          type="text"
          value={name}
          onChange={ (e) => {setName(e.target.value)}}
          disabled={registerLoading}
          required
        />
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={ (e) => {setEmail(e.target.value)}}
          disabled={registerLoading}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={ (e) => {setPassword(e.target.value)}}
          disabled={registerLoading}
          required
        />
        <input
          placeholder="Confirme sua senha"
          type="password"
          value={passwordConfirm}
          onChange={ (e) => {setPasswordConfirm(e.target.value)}}
          disabled={registerLoading}
          required
        />
        <button disabled={registerLoading} onClick={()=> submitRegister()}>
          CADASTRAR
        </button>

        <p>Já tem conta? {<Link to="/">Faça login!</Link>}</p>
      </FormsWrapper>
    </SignUpWrapper>
  )
}

const SignUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #A49BBB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  input {
    width: 270px;
    height: 45px;
    font-size: 16px;
    font-weight: 600;
    padding-left: 10px;
    border: 2px solid #D7D2D2;
    border-radius: 5px;
    color: #3C3C3C;
  }

  input:placeholder{
    color: #D7D2D2;
  }

  button {
    width: 270px;
    height: 45px;
    font-size: 18px;
    background-color: #E58C8A;
    border: 2px solid #FCB75D;
    border-radius: 5px;
    color: #FFFFFF;
  }

  button:active{
    transform: translate(1px, 2px);
  }

  p, a{
    color: #FFFFFF;
    margin-top: 20px;
    font-size: 12px;
    font-weight: 600;
  }
`;
