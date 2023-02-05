import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import ItemMenu from "../Items/ItemMenu";
import SmallButton from "../Form/SmallButton";

import useUpdateItem from "../../hooks/api/Items/useUpdateItem"

export default function EditItemBox({itemData, refresh}){
  const [itemName, setItemName] = useState(itemData.ItemName.name);
  const [itemQuantity, setItemQuantity] = useState(itemData.quantity);
  const [itemUnit, setItemUnit] = useState(itemData.unit);
  const [showMenu, setShowMenu] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const { updateItem } = useUpdateItem();

  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  function toggleEditItem(){
    setEditItem(!editItem);
  }

  async function submitUpdate(){
    const body = {
      name: itemName,
      quantity: itemQuantity,
      unit: itemUnit
    }
    try {
      await updateItem(itemData.id, body)
      toast('Item alterado!')
    } catch (error) {
      toast('Não foi possível alterar o item')
    }
  }

  function itemButton(){
    if(!editItem){
      return toggleMenu();
    }
    submitUpdate();
    toggleEditItem();
  }

  return(
    <EditItemBoxWrapper>
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
        <ItemMenu show={showMenu} toggleEdit={toggleEditItem} itemId={itemData.id} refresh={refresh}/>
      </Confirm>
    </EditItemBoxWrapper>
  )
}

const EditItemBoxWrapper = styled.div`
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

const ItemName = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  border: none;

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