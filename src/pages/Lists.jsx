import styled from "styled-components"
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu";
import Button from "../components/Form/Button";
import EmptyLists from "../components/Lists/EmptyLists";
import ListBox from "../components/Lists/ListBox";

import useGetLists from "../hooks/api/useGetLists";

export default function Lists (){
  const {listData} = useGetLists();
  const navigate = useNavigate();

  return(
    <ListsContainer>
      <Header>
        Listas
      </Header>
      <ButtonWrapper>
        <Button topMargin={"25px"} onClick={()=>navigate('/lists/1')}>
          + NOVA LISTA
        </Button>
      </ButtonWrapper>
    <ListsWrapper >
      {listData ? (
        listData.map((listData) => <ListBox key={listData.id} listData={listData} />)
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
  margin-bottom: 80px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
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