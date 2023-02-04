import styled from "styled-components";
import { useState } from "react";

import ConfirmModal from "../Modal/ConfirmModal";

import useDeleteLocal from "../../hooks/api/Locals/useDeleteLocal"
import { toast } from "react-toastify";

export default function LocalMenu({...props}){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { deleteLocal } = useDeleteLocal();

  function toggleModal(){
    setModalIsOpen(!modalIsOpen);
  }

  async function submitDelete(){
    try {
      await deleteLocal(props.listLocalId)
      toggleModal()
      toast('Local deletado!');
    } catch (error) {
      toast('Não foi possível deletar o local');
    }
  }

  return(
    <>
    <LocalMenuWrapper show={props.show}>
      <div onClick={() => props.toggleEdit()}>
        Editar local
      </div>
      <div onClick={() => toggleModal()}>
        Excluir local
      </div>
    </LocalMenuWrapper>
    <ConfirmModal  
      isOpen={modalIsOpen}
      confirm={submitDelete}
      toggleModal={toggleModal}
    >
      Excluir local?
    </ConfirmModal>
    </>
  )
}

const LocalMenuWrapper = styled.div`
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