import { useState } from "react";
import styled from "styled-components";

import CustomInput from "../Form/CustomInput";
import SmallButton from "../Form/SmallButton";
import NewItemBox from "../Items/NewItemBox";

export default function NewLocalBox (){
  const [localName, setLocalName] = useState();

  return(
    <NewLocalBoxWrapper>
      <LocalTitle>
        <CustomInput 
          title='Nome do Local'
          placeholder='Nome do Local'
          type='text'
          value={localName}
          onChange={setLocalName}
          disabled={false}
          required={true}
          />
        <SmallButton>
          + Adicionar Item
        </SmallButton>
      </LocalTitle>
      <ItemsWrapper>
        <NewItemBox />
        <NewItemBox />
        <NewItemBox />
      </ItemsWrapper>
    </NewLocalBoxWrapper>
  )
}

const NewLocalBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LocalTitle = styled.div`
  position: relative;
  width: 100%;

  input{
    padding-right: 90px;
  }

  button{
    position: absolute;
    top: 15px;
    right: 0px;
  }
`

const ItemsWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`