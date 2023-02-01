import { toast } from "react-toastify";
import styled from "styled-components";
import {BsCheck2, BsX} from "react-icons/bs"

import usePostAcceptShare from "../../hooks/api/Share/usePostAcceptShare";
import usePostRefuseShare from "../../hooks/api/Share/usePostRefuseShare";


export default function RequestBox({requestData}){
  const { postAcceptShare } = usePostAcceptShare();
  const { postRefuseShare } = usePostRefuseShare();

  async function acceptRequest(){
    try {
      await postAcceptShare(requestData.id)
      toast('Solicitação aceita!')
    } catch (error) {
      toast('Não foi possível aceitar a solicitação')
    }
  }

  async function refuseRequest(){
    try {
      await postRefuseShare(requestData.id)
      toast('Solicitação rejeitada!')
    } catch (error) {
      toast('Não foi possível rejeitar a solicitação')
    }
  }

  return(
    <RequestBoxWrapper>
      <ListInfos>
        {requestData.Lists.name}
        <p>{requestData.OwnerId.email}</p>
      </ListInfos>
      <RequestOptions>
        <AcceptRequest onClick={() => acceptRequest()}>
          <BsCheck2 />
        </AcceptRequest>
        <RefuseRequest onClick={() => refuseRequest()}>
          <BsX />
        </RefuseRequest>
      </RequestOptions>
    </RequestBoxWrapper>
  )
}

const RequestBoxWrapper = styled.div`
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

  p{
    margin-top: 10px;
    font-size: 14px;
    color: #B1B1B1;
  }
`

const RequestOptions = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 30px;
`

const AcceptRequest = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #29B91D;
  border-radius: 5px;
`

const RefuseRequest = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D81616;
  border-radius: 5px;
`