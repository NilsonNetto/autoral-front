import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";

import defaultPhoto from "../../assets/images/defaultProfile.png";
import InputModal from "../Modal/InputModal";

import useUpdatePicture from "../../hooks/api/Profile/useUpdatePicture";

export default function Picture({...props}){
  const [newPhoto, setNewPhoto] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const photo = props.photo ? props.photo : defaultPhoto
  const { updatePicture } = useUpdatePicture();

  function toggleModal(){
    setOpenModal(!openModal);
  }

  async function submitPicture(){
    const profilePicture = {
      profilePicture: newPhoto
    }
    try {
      await updatePicture(profilePicture);
      toggleModal();
      props.refresh();
      toast('Foto de perfil atualizados!');
    } catch (error) {
      toast('Erro ao atualizar foto');
    }
  }

  return(
    <PictureWrapper>
      <Image>
        <img src={photo} alt='Profile picture' />
      </Image>
      <ChangePicture onClick={()=> toggleModal()}>
        Trocar Foto
      </ChangePicture>
      <InputModal
        isOpen={openModal}
        placeholder='Link da foto'
        value={newPhoto}
        onChange={setNewPhoto}
        confirm={submitPicture}
        toggleModal={toggleModal}
      >
        Insira o link da sua foto
      </InputModal>
    </PictureWrapper>
  )
}

const PictureWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #796AA1;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
  }
`

const ChangePicture = styled.div`
  margin-top: 5px;
  color: #B1B1B1;
  font-size: 12px;
`