import { useState } from "react";
import styled from "styled-components";
import {IoMdClose} from "react-icons/io";

export default function ItemsBox(){
  const [check, setCheck] = useState(true);
  const [unit, setUnit] = useState('');
  return(
    <ItemsBoxWrapper>
      <CheckBox
        type='checkbox'
        checked={check}
        onChange={() => setCheck(!check)}
      />
      <ItemName>
        Nome do item
      </ItemName> 
      <QuantityBox
        type='text'
        placeholder="Qtdade."
        pattern='{1,100}'
      >

      </QuantityBox>
      <UnitBox defaultValue={'un'} onChange={(e) => {setUnit(e.target.value)}}>
        <option value={'un'}>Un.</option>
        <option value={'kgs'}>Kgs</option>
      </UnitBox>
      <CancelBox>
        <IoMdClose />
      </CancelBox>
    </ItemsBoxWrapper>
  )
}

const ItemsBoxWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #D7D2D2;
  color: #3C3C3C;
  gap: 10px
`

const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  border: 1px solid #D7D2D2;

  :focus{
    outline: none;
  }

  :checked{
    background-color: #29B91D;
  }  
`

const ItemName = styled.span`
  width: 100%;
  font-size: 14px;
  font-weight: 400;

`

const QuantityBox = styled.input`
  width: 40px;
  height: 20px;
  color: #3C3C3C;
  font-size: 10px;
  font-weight: 400;
  background-color: #FFFFFF;
  border: 1px solid #D7D2D2;
  border-radius: 4px;
  text-align: center;

  :focus{
    outline: none;
  }

  :placeholder{
    color: #B1B1B1;
  }
`

const UnitBox = styled.select`
  width: 40px;
  height: 20px;
  color: #3C3C3C;
  font-size: 10px;
  font-weight: 400;
  background-color: #FFFFFF;
  border: 1px solid #D7D2D2;
  border-radius: 4px;
  text-align: center;
  appearance: none;

  :focus{
    background-color: #D7D2D2;
  }
`

const CancelBox = styled.div`
  font-size: 18px;
  color: #D88416;
`