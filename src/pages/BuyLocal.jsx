import styled from "styled-components"
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu"
import LocalBox from "../components/Locals/LocalBox";
import Button from "../components/Form/Button";

import useGetItems from "../hooks/api/Items/useGetItems";
import useFinishLocal from "../hooks/api/Locals/useFinishLocal";

export default function BuyLocal(){
  const { listId, listLocalId } = useParams();
  const { getItemsData, getItems } = useGetItems();
  const { finishLocal } = useFinishLocal();
  const navigate = useNavigate();

  useEffect(()=>{
    getItems(listLocalId);
  },[])

  async function submitFinish(){
    try {
      await finishLocal(listLocalId)
      toast('Compra finalizada!')
      navigate(`/buy/${listId}`)
    } catch (error) {
      toast('Não foi possível finalizar a compra')
    }
  }

  return(
    <BuyLocalContainer>
      <Header>
        Iniciar Compra
      </Header>
      {getItemsData ? <LocalBox localData={getItemsData}/> : <></>}     
      <Button onClick={submitFinish} topMargin={'30px'}>
        FINALIZAR COMPRA
      </Button>
      <Menu />
    </BuyLocalContainer>
  )
}

const BuyLocalContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 55px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 45px 0 45px;
`