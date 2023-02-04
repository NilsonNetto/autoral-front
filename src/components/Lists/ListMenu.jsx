import styled from "styled-components";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { toast } from "react-toastify";

import ConfirmModal from "../Modal/ConfirmModal";
import InputModal from "../Modal/InputModal";

import usePostShare from "../../hooks/api/Share/usePostShare";
import useDeleteList from "../../hooks/api/Lists/useDeleteList";

export default function ListMenu({show, listId, toggleMenu}){
  const [shareModal, setShareModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [newListName, setNewListName] = useState('');
  const { postShare } = usePostShare();
  const { deleteList } = useDeleteList();

  function toggleShareModal(){
    setShareModal(!shareModal);
  }

  function toggleEditModal(){
    setEditModal(!editModal);
  }

  function toggleDeleteModal(){
    setDeleteModal(!deleteModal);
  }

  async function submitShare(){
    const shareData = {
      email: userEmail
    }
    try {
      postShare(listId, shareData);
      toast('Solicitação de compartilhamento enviada!');
    } catch (error) {
      toast('Não foi possível compartilhar a lista');
    }
  }

  async function submitEdit(){

  }

  async function submitDelete(){
    try {
      deleteList(listId)
      toast('Lista deletada!')
    } catch (error) {
      toast('Não foi possível deletar lista')
    }
  }

  return(
    <ListMenuWrapper show={show}>
      <CloseMenu onClick={() => toggleMenu()}>
        <AiOutlineClose />
      </CloseMenu>
      <div onClick={() => toggleShareModal()}>
        Compartilhar Lista
        <InputModal
        isOpen={shareModal}
        toggleModal={toggleShareModal}
        placeholder='Email do usuário'
        value={userEmail}
        onChange={setUserEmail}
        confirm={submitShare}
      >
            Insira o email do usuário
      </InputModal>
      </div>
      <div onClick={() => toggleEditModal()}>
        Editar Lista
        <InputModal
        isOpen={editModal}
        toggleModal={toggleEditModal}
        placeholder='Nome da lista'
        value={newListName}
        onChange={setNewListName}
        confirm={submitEdit}
      >
            Insira o novo nome da lista
      </InputModal>
      </div>
      <div onClick={() => toggleDeleteModal()}>
        Excluir Lista
        <ConfirmModal
          isOpen={deleteModal}
          toggleModal={toggleDeleteModal}
          confirm={submitDelete}
        >
          Excluir lista?
        </ConfirmModal>
      </div>
    </ListMenuWrapper>
  )
}

const ListMenuWrapper = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  z-index: 1;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F4F4F4;
  border-radius: 5px;
  display: ${props => props.show ? 'flex' : 'none'};
  color: #D88416;
  font-size: 17px;
  font-weight: 400;
  padding: 10px;
  gap: 20px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.25);
`

const CloseMenu = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 1px;
  width: 20px;
  height: 100%;
  font-size: 16px;
  background-color: #E58C8A;
  color: #ffffff;
  border: 1px solid #D81616;
  border-radius: 0 5px 5px 0;
`