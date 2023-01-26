import styled from "styled-components";

import ListBox from "../Lists/ListBox";

export default function SharedLists({children, listsData}){
  return (
    <SharedListsWrapper>
      <Title>
        {children}
      </Title>
      <Lists>
        {listsData.map((list) => <ListBox key={list.id} listData={list}/>)}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow-y: scroll;
`