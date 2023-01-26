import { useState } from "react";
import styled from "styled-components";
import {HiOutlineDotsVertical} from "react-icons/hi";

import ItemMenu from "./ItemMenu";

export default function ItemBox({itemData}){
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return(
    <ItemBoxWrapper>
      <CheckBox
        type='checkbox'
        checked={check}
        onChange={() => setCheck(!check)}
      />
      <ItemName check={check}>
        Nome do item
      </ItemName> 
      <QuantityBox
        type='text'
        placeholder="Qtdade."
        pattern='{1,100}'
        disabled={!edit}
      >
      </QuantityBox>
      <UnitBox 
        defaultValue={'un'} 
        onChange={(e) => {setUnit(e.target.value)}}
        disabled={!edit}>
          <option value={'un'}>Un.</option>
          <option value={'kgs'}>Kgs</option>
      </UnitBox>
      <OptionBox onClick={()=>setShowMenu(!showMenu)}>
        <HiOutlineDotsVertical />
        <ItemMenu show={showMenu}/>
      </OptionBox>
    </ItemBoxWrapper>
  )
}

const ItemBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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
  font-weight: 500;
  color: ${props => props.check ? '#B1B1B1' : '#3C3C3C'} ;
  text-decoration: ${props => props.check ? 'line-through' : 'none'};
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

const OptionBox = styled.div`
  font-size: 18px;
  color: #D88416;
`