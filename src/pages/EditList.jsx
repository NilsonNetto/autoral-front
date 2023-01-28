import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../components/Header/Header";
import Menu from "../components/FooterMenu/Menu";
import Button from "../components/Form/Button";
import SmallButton from "../components/Form/SmallButton";
import CustomInput from "../components/Form/CustomInput";
import EditLocalBox from "../components/Locals/EditLocalBox";

import useGetLocals from "../hooks/api/useGetLocals";
import usePostLocal from "../hooks/api/usePostLocal";

export default function EditList(){
  const [localName, setLocalName] = useState('');
  const { listId } = useParams();
  const { getLocalsData } = useGetLocals(listId);
  const { postLocal } = usePostLocal();

  async function submitLocal(){
    const localData = {
      name: localName
    }
    try {
      await postLocal(listId, localData);
      toast('Local inserido!');
    } catch (error) {
      toast('Não foi possível inserir o local!');
    }
  }

  return(
    <EditListContainer>
      <Header>
        Nome da lista
      </Header>
      <CustomInput 
        title='Nome da Lista'
        placeholder='Nome da Lista'
        type='text'
        value={'aa'}
        onChange={'setListName'}
        disabled={false}
        required={true}
      />
      { getLocalsData?.map((localData) => <EditLocalBox key={localData.id} localData={localData}/>)}

      <NewLocal>
        <CustomInput 
          title='Novo do Local'
          placeholder='Nome do Local'
          type='text'
          value={localName}
          onChange={setLocalName}
          disabled={false}
          required={true}
        />
        <Confirm onClick={()=>submitLocal()}>
          <SmallButton type={'confirm'} />
        </Confirm>
      </NewLocal>

      <Button topMargin={'30px'} onClick={() => {submitList()}}>
          SALVAR LISTA
      </Button>
      <Menu />
    </EditListContainer>
  )
}

const EditListContainer = styled.div`
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

const NewLocal = styled.div`
  position: relative;
  width: 100%;

  input{
    padding-right: 30px;
  }
`

const Confirm = styled.div`
  position: absolute;
  top: 15px;
  right: 0px;
`