import styled from "styled-components"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Loading from "./Loading";
import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu";
import Button from "../components/Form/Button";
import EmptyLists from "../components/Lists/EmptyLists";
import ListBox from "../components/Lists/ListBox";
import InputModal from "../components/Modal/InputModal";

import useGetLists from "../hooks/api/Lists/useGetLists";
import usePostList from "../hooks/api/Lists/usePostList";

export default function Lists (){
  const [listName, setListName] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [refreshLists, setRefreshLists] = useState(false);
  const { getListsData, getListsLoading, getLists } = useGetLists();
  const { postList } = usePostList();
  const navigate = useNavigate();

  useEffect(()=>{
    getLists();
  }, [refreshLists])

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

  function toggleModal(){
    setOpenModal(!openModal);
  }

  function toggleRefreshLists(){
    setRefreshLists(!refreshLists);
  }

  return(
    getListsLoading ? (
      <Loading />
    ) : (
    <ListsContainer>
      <Header>
        Listas
      </Header>
      <ButtonWrapper>
        <Button topMargin={"15px"} onClick={()=>toggleModal()}>
          + NOVA LISTA
        </Button>
      <InputModal
        isOpen={openModal}
        toggleModal={toggleModal}
        placeholder='Nome da lista'
        value={listName}
        onChange={setListName}
        confirm={submitList}
      >
            Insira o nome da lista
      </InputModal>
      </ButtonWrapper>
    <ListsWrapper >
      {getListsData ? (
        getListsData.map((listData) => <ListBox key={listData.id} listData={listData} refresh={toggleRefreshLists} />)
      ) : (
        <EmptyLists />
      )
      }
    </ListsWrapper>

      <Menu />
    </ListsContainer>
    )
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