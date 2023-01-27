import styled from "styled-components"
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Menu from "../components/FooterMenu/Menu";
import Picture from "../components/Profile/Picture";
import CustomInput from "../components/Form/CustomInput";
import Button from "../components/Form/Button";
import useGetProfile from "../hooks/api/useGetProfile";
import useUpdateProfile from "../hooks/api/useUpdateProfile";

export default function Profile(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [photo, setPhoto] = useState('');

  const { getProfileData } = useGetProfile();
  const { updateProfileLoading, updateProfile } = useUpdateProfile();

  useEffect(() =>{
    if(getProfileData){
      setName(getProfileData.name);
      setEmail(getProfileData.email);
      setPhoto(getProfileData.profilePicture);
    }
  }, [getProfileData])

  async function submitUpdate(){
    if(password !== passwordConfirm){
      toast('Senhas não são iguais!');
    } else {
      const profileData = {
        name,
        email,
        password
      }
      try {
        await updateProfile(profileData);
        toast('Dados de perfil atualizados!');
      } catch (error) {
        toast('Erro ao atualizar perfil');
      }
    }
  }

  return(
    <ProfileContainer>
      <Header>
        Perfil
      </Header>
      <PictureWrapper>
        <Picture photo={photo}/>
      </PictureWrapper>
      <FormsWrapper>
        <CustomInput
          title={"Nome"}
          placeholder={"Nome"}
          type={"text"}
          value={name}
          onChange={setName}
          disabled={updateProfileLoading}
          required={true}
        />
        <CustomInput
          title={"E-mail"}
          placeholder={"E-mail"}
          type={"email"}
          value={email}
          onChange={setEmail}
          disabled={updateProfileLoading}
          required={true}
        />        
        <CustomInput
          title={"Alterar Senha"}
          placeholder={"Nova senha"}
          type={"password"}
          value={password}
          onChange={setPassword}
          disabled={updateProfileLoading}
          required={true}
        />
        <CustomInput
          title={"Confirmar senha"}
          placeholder={"Nova senha"}
          type={"password"}
          value={passwordConfirm}
          onChange={setPasswordConfirm}
          disabled={updateProfileLoading}
          required={true}
        />
        <Button onClick={() => submitUpdate()} topMargin={'20px'}>
          SALVAR
        </Button>
        <Link to={'/'}>Sair da conta</Link>
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

  a{
    font-size: 12px;
    font-weight: 400;
    color: #B1B1B1;
  }
`