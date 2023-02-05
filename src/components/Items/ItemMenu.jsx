import styled from "styled-components";
import { useState } from "react";

import ConfirmModal from "../Modal/ConfirmModal";

import useDeleteItem from "../../hooks/api/Items/useDeleteItem";
import { toast } from "react-toastify";

export default function ItemMenu({...props}){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { deleteItem } = useDeleteItem();

  function toggleModal(){
    setModalIsOpen(!modalIsOpen);
  }

  async function submitDelete(){

    try {
      await deleteItem(props.itemId);
      toggleModal();
      props.refresh();
      toast('Item deletado')
    } catch (error) {
      toast('Não foi possível deletar o item')
    }
  }

   return(
    <>
    <ItemMenuWrapper show={props.show}>
      <div onClick={() => props.toggleEdit()}>
        Editar Item
      </div>
      <div onClick={() => toggleModal()}>
        Excluir Item
      </div>
    </ItemMenuWrapper>
    <ConfirmModal  
      isOpen={modalIsOpen}
      confirm={submitDelete}
      toggleModal={toggleModal}
    >
      Excluir item?
    </ConfirmModal>
    </>
  )
}

const ItemMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F4F4F4;
  border-radius: 5px;
  display: ${props => props.show ? 'flex' : 'none'};
  color: #D88416;
  font-size: 15px;
  font-weight: 400;
  padding: 10px;
  gap: 15px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.25);
`