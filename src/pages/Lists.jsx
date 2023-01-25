import styled from "styled-components"

import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu";
import Button from "../components/Form/Button";
import EmptyLists from "../components/Lists/EmptyLists";
import ListBox from "../components/Lists/ListBox";

const mockLists = [
  {
  id: 1,
  name: "Lista 01",
  date: new Date()
  },{
  id: 2,
  name: "Lista 02",
  date: new Date()
  },
  {
  id: 6,
  name: "Lista 03",
  date: new Date()
  },
  {
  id: 4,
  name: "Lista 04",
  date: new Date()
  }
]

export default function Lists (){
  return(
    <ListsContainer>
      <Header>
        Listas
      </Header>
      <ButtonWrapper>
        <Button topMargin={"25px"}>
          + NOVA LISTA
        </Button>
      </ButtonWrapper>
    <ListsWrapper >
      {mockLists ? (
        mockLists.map((listData) => <ListBox key={listData.id} listData={listData} />)
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