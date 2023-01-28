import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function BuyLocalBox({localData}){
  const navigate = useNavigate();

  return(
    <BuyLocalBoxWrapper onClick={() => navigate(`/buy/${localData.listId}/${localData.id}`)}>
      <LocalTitle>
        {localData.locals.name}
      </LocalTitle>
    </BuyLocalBoxWrapper>
  )
}

const BuyLocalBoxWrapper = styled.div`
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