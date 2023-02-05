import styled from "styled-components";

import SharedBox from "./SharedBox";

export default function SharedLists({children, listsData, refresh}){
  return (
    <SharedListsWrapper>
      <Title>
        {children}
      </Title>
      <Lists>
        {listsData?.length === 0 ? (
          <p>Você ainda não tem listas para exibir</p>
          ) : (
          listsData?.map((list) => <SharedBox key={list.id} sharedData={list} refresh={refresh}/>)
        )}
      </Lists>      
    </SharedListsWrapper>
  )
}

const SharedListsWrapper = styled.div`
  width: 100%;
  background-color: #F4F4F4;
  border-radius: 10px;
  padding: 0 15px 15px 15px;
`

const Title = styled.div`
  width: 100%;
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  color: #D88416;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Lists = styled.div`
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  gap: 10px;
  overflow-y: scroll;

  p{
    text-align: center;
    font-size: 16px;
    color: #3C3C3C;
  }
`