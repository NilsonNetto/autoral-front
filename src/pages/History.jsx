import styled from "styled-components";

import Menu from "../components/FooterMenu/Menu";
import Header from "../components/Header/Header";

export default function History(){
  return(
    <HistoryContainer>
      <Header>
        Histórico
      </Header>
        <h1>EM BREVE</h1>
      <Menu />
    </HistoryContainer>
  )
}

const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  margin-bottom: 80px;

  h1{
    margin-top: 20px;
    color: #3C3C3C;
  }
`