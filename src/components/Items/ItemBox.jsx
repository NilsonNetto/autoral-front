import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import ItemMenu from "./ItemMenu";
import SmallButton from "../Form/SmallButton";

import useCheckItem from "../../hooks/api/Items/useCheckItem"
import useUpdateItem from "../../hooks/api/Items/useUpdateItem"

export default function ItemBox({itemData, refresh}){
  const [itemCheck, setItemCheck] = useState(itemData.checked);
  const [itemName, setItemName] = useState(itemData.ItemName.name);
  const [itemQuantity, setItemQuantity] = useState(itemData.quantity);
  const [itemUnit, setItemUnit] = useState(itemData.unit);
  const [showMenu, setShowMenu] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const { checkItem } = useCheckItem();
  const { updateItem } = useUpdateItem();

  async function submitCheck(){
    try {
      await checkItem(itemData.id)
      setItemCheck(!itemCheck)
    } catch (error) {
      toast('Não foi possivel marcar o item')
    }
  }

  async function submitUpdate(){
    const body = {
      name: itemName,
      unit: itemUnit,
      quantity: itemQuantity
    }
    try {
      await updateItem(itemData.id, body)
      toast('Item atualizado!')
    } catch (error) {
      toast('Não foi possível atualizar o item')
    }
  }

  function toggleMenu(){
    setShowMenu(!showMenu)
  }

  function toggleEdit(){
    setEditItem(!editItem);
  }

  function itemButton(){
    if(!editItem){
      return toggleMenu()
    }
    submitUpdate();
    toggleEdit();
  }

  return(
    <ItemBoxWrapper>
      <CheckBox
        type='checkbox'
        checked={itemCheck}
        value={itemCheck}
        onChange={() => submitCheck()}
      />
      <ItemName 
        placeholder='Nome do item'
        type='text'
        value={itemName}
        onChange={(e)=> setItemName(e.target.value)}
        disabled={!editItem}
        required={true}
      />
      <QuantityBox
        type='text'
        placeholder="Qtdade."
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
        pattern={[1,100]}
        disabled={!editItem}
      >
      </QuantityBox>
      <UnitBox 
        defaultValue={itemUnit} 
        onChange={(e) => {setItemUnit(e.target.value)}}
        disabled={!editItem}
        >
        <option value={'un'}>Un.</option>
        <option value={'kgs'}>Kgs</option>
      </UnitBox>
      <Confirm onClick={()=>itemButton()}>
        <SmallButton type={editItem ? 'update' : ''}/>
        <ItemMenu show={showMenu} toggleEdit={toggleEdit} itemId={itemData.id} refresh={refresh}/>
      </Confirm>
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

const ItemName = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  border: none;
  background-color: transparent;

  :focus{
    outline: none;
}
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

const Confirm = styled.div`
  position: relative;
  font-size: 18px;
  color: #D88416;
`