import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import logo from "../assets/images/logo.png";
import useLogin from "../hooks/api/useLogin";
import UserContext from "../contexts/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loginLoading, login} = useLogin();
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  async function submitLogin(){
    const loginData = {
      email,
      password
    }
    try {
      const userData = await login(loginData);
      setUserData(userData);
      toast('Login realizado!')
      navigate('/lists');
    } catch (error) {
      toast('Informações erradas!');
    }
  }

  return (
    <LoginWrapper>
      <LogoWrapper>
        <img src={logo} alt='Risuto'/>
      </LogoWrapper>
      <FormsWrapper>
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={ (e) => {setEmail(e.target.value)}}
          disabled={loginLoading}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={ (e) => {setPassword(e.target.value)}}
          disabled={loginLoading}
          required
        />
        <button disabled={loginLoading} onClick={() => submitLogin()}>
          ENTRAR
        </button>

        <p>Não tem uma conta? {<Link to="/signup">Cadastre-se!</Link>}</p>
      </FormsWrapper>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
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
