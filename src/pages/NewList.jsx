import styled from "styled-components";
import { useState } from "react";

import Header from "../components/Header/Header";
import Menu from "../components/FooterMenu/Menu";
import Button from "../components/Form/Button";
import CustomInput from "../components/Form/CustomInput";
import SmallButton from "../components/Form/SmallButton";
import NewLocalBox from "../components/Locals/NewLocalBox";


export default function NewList(){
  const [listName, setListName] = useState('');

  return(
    <NewListContainer>
      <Header>
        Nova Lista
      </Header>
      <CustomInput 
        title='Nome da Lista'
        placeholder='Nome da Lista'
        type='text'
        value={listName}
        onChange={setListName}
        disabled={false}
        required={true}
      />
      <NewLocalBox />
      <SmallButton>
        + Adicionar Local
      </SmallButton>

      <Button>
          CRIAR LISTA
      </Button>
      <Menu />
    </NewListContainer>
  )
}

const NewListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 55px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 35px;
  gap: 20px;
`