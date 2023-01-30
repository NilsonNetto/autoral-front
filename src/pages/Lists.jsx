import styled from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu";
import CustomInput from "../components/Form/CustomInput";
import Button from "../components/Form/Button";
import EmptyLists from "../components/Lists/EmptyLists";
import ListBox from "../components/Lists/ListBox";

import useGetLists from "../hooks/api/useGetLists";
import usePostList from "../hooks/api/usePostList";

export default function Lists (){
  const [listName, setListName] = useState('');
  const [hideInput, setHideInput] = useState(true);
  const { getListsData } = useGetLists();
  const { postList } = usePostList();
  const navigate = useNavigate();

  async function submitList(){
    try {
      const listData = {
        name: listName
      }
      
      const createdList = await postList(listData);
      navigate(`/lists/${createdList.id}`);
    } catch (error) { 
      toast('Não foi possível criar a lista!');
    }
  }

  console.log(getListsData);

  return(
    <ListsContainer>
      <Header>
        Listas
      </Header>
      <ButtonWrapper>
        <CustomInput 
          title='Nome da Lista'
          placeholder='Nome da Lista'
          type='text'
          value={listName}
          onChange={setListName}
          disabled={false}
          required={true}
          hide={hideInput}
        />
        {hideInput ? (
          <Button topMargin={"15px"} onClick={()=>setHideInput(false)}>
            + NOVA LISTA
          </Button>
        ) : (
          <Button topMargin={"25px"} onClick={()=>submitList()}>
            CRIAR LISTA
          </Button>
        )}
      </ButtonWrapper>
    <ListsWrapper >
      {getListsData ? (
        getListsData.map((listData) => <ListBox key={listData.id} listData={listData} />)
      ) : (
        <EmptyLists />
      )
      }
    </ListsWrapper>

      <Menu />
    </ListsContainer>
  )
}

const ListsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 55px;
  margin-bottom: 100px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 50px 0 50px;
`

const ListsWrapper = styled.div`
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