import styled from "styled-components";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import {RiDeleteBin2Line} from "react-icons/ri"

import ConfirmModal from "../Modal/ConfirmModal";

import usePostRemoveShare from "../../hooks/api/Share/usePostRemoveShare";

export default function SharedBox({sharedData}){
  const { postRemoveShare } = usePostRemoveShare();
  const [user, setUser] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState('');

  function toggleModal(){
    setOpenModal(!openModal);
  }

  async function removeShare(){
    try {
      await postRemoveShare(sharedData.Lists.id, user.id)
      toast('Compartilhamento removido!');
    } catch (error) {
      toast('Não foi possível remover o compartilhamento!')
    }
  }

  useEffect(()=>{
    if(sharedData.OwnerId){
      setUser({ 
        ...sharedData.OwnerId,
        type: "user"
      })
    } else {
      setUser({
        ...sharedData.UserId,
        type: "owner"
      })
      sharedData.pending ? (
        setStatus('Pendente')
      ) : (
        sharedData.accepted ? (
          setStatus('Aceito')
        ) : (
          setStatus('Recusado')
        )
      )
    }
  },[sharedData])

  return(
    <SharedBoxWrapper>
      <ListInfos>
        {sharedData.Lists.name}
        <UserInfo>{user.type === 'owner' ? (
          `${user.email} - (${status})`
        ) : (
          user.email
        )}</UserInfo>
      </ListInfos>
      <ShareRemove onClick={() => toggleModal()}>
        <ConfirmModal
          isOpen={openModal}
          confirm={removeShare}
          toggleModal={toggleModal}
        >
          Remover compartilhamento?
        </ConfirmModal>
        <RiDeleteBin2Line />
      </ShareRemove>
    </SharedBoxWrapper>
  )
}

const SharedBoxWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #E58C8A;
  border-radius: 5px;
  padding: 5px 10px;
`

const ListInfos = styled.div`
  width: 100%;
  color: #D96E6B;
  font-size: 16px;
  font-weight: 400;
 `

const UserInfo = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #B1B1B1;
  text-align: left;
`

const ShareRemove = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  background-color: #E58C8A;
  border-radius: 5px;
  border: 1px solid #D88416;
`
