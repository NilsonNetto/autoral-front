import styled from "styled-components";

import Menu from "../components/FooterMenu/Menu";
import Header from "../components/Header/Header";
import SharedLists from "../components/Share/SharedLists";

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

export default function Share(){
  return(
    <ShareContainer>
      <Header>
        Compartilhar
      </Header>
      <SharedLists listsData={mockLists}>
        Listas compartilhadas comigo
      </SharedLists>
      <SharedLists listsData={mockLists}>
        Listas que compartilhei
      </SharedLists>
      <Menu />
    </ShareContainer>
  )
}

const ShareContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  margin-bottom: 80px;
  padding: 20px 35px;
  gap: 20px;
`