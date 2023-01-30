import styled from "styled-components";
import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListBuyBox ({listData}){
  const navigate = useNavigate();

  function toListLocals(id){
    navigate(`/buy/${id}`)
  }

  return (
    <ListBoxWrapper onClick={()=>toListLocals(listData.id)}>
      <ListName>
        <span>{listData.Lists.name}</span>
        <span>{dayjs(listData.createdAt).format('DD/MM')}</span>
      </ListName>
    </ListBoxWrapper>
  )
}

const ListBoxWrapper = styled.div`
  width: 100%;
  height: 45px;
  border: 2px solid #E58C8A;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #D96E6B;
  padding: 0 5px 0 15px;
  position: relative;
`

const ListName = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ListOptions = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`