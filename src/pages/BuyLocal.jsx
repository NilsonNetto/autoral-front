import styled from "styled-components"

import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu"
import LocalBox from "../components/Locals/LocalBox";
import Button from "../components/Form/Button";


export default function BuyLocal(){
  return(
    <BuyLocalContainer>
      <Header>
        Nome da lista
      </Header>
      <LocalBox />
      <Button topMargin={'30px'}>
        FINALIZAR COMPRA
      </Button>
      <Menu />
    </BuyLocalContainer>
  )
}

const BuyLocalContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 55px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 45px 0 45px;
`