import styled from "styled-components"

import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu"
import ItemsBox from "../components/Items/ItemsBox";


export default function ListPage(){
  return(
    <ListPageContainer>
      <Header>
        Nome da lista
      </Header>
      <ItemsBox />
      <ItemsBox />
      <ItemsBox />
      <Menu />
    </ListPageContainer>
  )
}

const ListPageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 55px;
  margin-bottom: 80px;
`