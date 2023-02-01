import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {BsCheckLg} from "react-icons/bs"

export default function BuyLocalBox({localData}){
  const navigate = useNavigate();

  function goToListLocal(){
    if(!localData.finished){
      navigate(`/buy/${localData.listId}/${localData.id}`)
    }
  }

  return(
    <BuyLocalBoxWrapper onClick={() => goToListLocal()}>
      <LocalTitle>
        {localData.LocalsName.name}
      </LocalTitle>
      <LocalCheck finished={localData.finished}>
        {localData.finished ? (
          <BsCheckLg />
        ) : (
          ''
        )}
      </LocalCheck>
    </BuyLocalBoxWrapper>
  )
}

const BuyLocalBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F4F4F4;
  border: 1px solid #B1B1B1;
  border-radius: 6px;
  padding: 10px;
`

const LocalTitle = styled.div`
  width: auto;
  max-width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #3C3C3C;
`

const LocalCheck = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: ${props => props.finished ? '#29B91D' : '#FFFFFF'};
  border-radius: 5px;
  border: 1px solid #B1B1B1;
`