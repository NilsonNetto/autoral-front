import styled from "styled-components"
import { useState } from "react";

import Header from "../components/Header/Header";
import Menu from "../components/FooterMenu/Menu";
import Picture from "../components/Profile/Picture";
import CustomInput from "../components/Form/CustomInput";
import Button from "../components/Form/Button";

export default function Profile(){
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return(
    <ProfileContainer>
      <Header>
        Perfil
      </Header>
      <PictureWrapper>
        <Picture photo={""}/>
      </PictureWrapper>
      <FormsWrapper>
        <CustomInput
          title={"Nome"}
          placeholder={"Nome"}
          type={"text"}
          value={name}
          onChange={setName}
          disabled={false}
          required={true}
        />
        <CustomInput
          title={"Username"}
          placeholder={"Username"}
          type={"text"}
          value={username}
          onChange={setUsername}
          disabled={false}
          required={true}
        />
        <CustomInput
          title={"E-mail"}
          placeholder={"E-mail"}
          type={"email"}
          value={email}
          onChange={setEmail}
          disabled={false}
          required={true}
        />        
        <CustomInput
          title={"Alterar Senha"}
          placeholder={"Nova senha"}
          type={"password"}
          value={password}
          onChange={setPassword}
          disabled={false}
          required={true}
        />
        <CustomInput
          title={"Confirmar senha"}
          placeholder={"Nova senha"}
          type={"password"}
          value={passwordConfirm}
          onChange={setPasswordConfirm}
          disabled={false}
          required={true}
        />
        <Button onClick={() => alert("hello")} topMargin={'20px'}>
          SALVAR
        </Button>
      </FormsWrapper>
      <Menu />
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 55px;
  margin-bottom: 75px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const PictureWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
`

const FormsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 30px;
  gap: 15px;
`