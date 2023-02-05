import styled from "styled-components";

import ItemBox from "../Items/ItemBox";

export default function LocalBox({localData, refresh}){
  
  return(
    <LocalBoxWrapper>
      <LocalTitle>
        {localData.LocalsName.name}
      </LocalTitle>
      <ItemsWrapper>
        {localData.Items.map(itemData => <ItemBox key={itemData.id} itemData={itemData} refresh={refresh}/>)}
      </ItemsWrapper>
    </LocalBoxWrapper>
  )
}

const LocalBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F4F4F4;
  border: 1px solid #B1B1B1;
  border-radius: 6px;
  padding: 10px;
`

const LocalTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #3C3C3C;
`

const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  padding-left: 5px;
  gap: 10px;
`