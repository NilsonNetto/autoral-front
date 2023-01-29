import styled from "styled-components"
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu"
import BuyLocalBox from "../components/Locals/BuyLocalBox";

import useGetLocals from "../hooks/api/useGetLocals";

export default function BuyLocal(){
  const { listId } = useParams();
  const { getLocalsData, getLocals} = useGetLocals();

  useEffect(()=>{
    getLocals(listId);
  },[])

  return(
    <BuyLocalContainer>
      <Header>
        Iniciar Compra
      </Header>
      <LocalWrapper>
        {getLocalsData?.map((localData)=> <BuyLocalBox key={localData.id} localData={localData}/>)}
      </LocalWrapper>
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
`

const LocalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  gap: 15px;
  margin-top: 15px;
`