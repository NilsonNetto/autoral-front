import styled from "styled-components";

import listsBackground from "../../assets/images/listsBackground.png";

export default function EmptyLists(){
  return(
    <EmptyListsWrapper>
      <img src={listsBackground} alt="No lists to show"/>
      <p>Você ainda não possui listas.</p>
    </EmptyListsWrapper>
  )
}

const EmptyListsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img{
    margin: 20px;
  }

  p{
    color: #B1B1B1;
    font-size: 18px;
    font-weight: 400;
  }
`