import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import CustomInput from "../Form/CustomInput";
import EditItemBox from "../Items/EditItemBox";
import SmallButton from "../Form/SmallButton";
import LocalMenu from "./LocalMenu";

import usePostItem from "../../hooks/api/Items/usePostItem";
import useGetItems from "../../hooks/api/Items/useGetItems";
import useUpdateLocal from "../../hooks/api/Locals/useUpdateLocal";

export default function EditLocalBox ({localData}){
  const [localName, setLocalName] = useState(localData.LocalsName.name);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemUnit, setItemUnit] = useState('un');
  const [editListName, setEditListName] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [refreshItems, setRefreshItems] = useState(false);
  const { postItem } = usePostItem();
  const { getItemsData, getItems } = useGetItems();
  const { updateLocal } = useUpdateLocal();

  useEffect(()=>{
    getItems(localData.id)
  },[refreshItems])

  function clearItem(){
    setItemName('');
    setItemQuantity('');
    setItemUnit(itemUnit);
    toggleRefreshItems();
  }

  async function submitItem(){
    const itemData = {
      name: itemName,
      quantity: Number(itemQuantity),
      unit: itemUnit
    }

    try {
      await postItem(localData.id, itemData);
      clearItem();
      toast('Item inserido!');
    } catch (error) {
      toast('Não foi possível inserir o item!');
    }
  }

  async function submitUpdate(){
    const body = {
      name: localName
    }
    try {
      await updateLocal(localData.id, body)
      toast('Nome da lista atualizado')
    } catch (error) {
      toast('Não foi possível atualizar a lista')
    }
  }

  function toggleEditListName(){
    setEditListName(!editListName);
  }

  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  function listButton(){
    if(!editListName){
      return toggleMenu()
    }
    submitUpdate();
    toggleEditListName();
  }

  function toggleRefreshItems(){
    setRefreshItems(!refreshItems);
  }

  return(
    <EditLocalBoxWrapper>
      <LocalTitle>
        <CustomInput 
          title='Local'
          placeholder='Nome do Local'
          type='text'
          value={localName}
          onChange={setLocalName}
          disabled={!editListName}
          required={true}
          />
        <Confirm onClick={()=>listButton()}>
          <SmallButton type={editListName ? 'update' : ''}/>
          <LocalMenu show={showMenu} toggleEdit={toggleEditListName} listLocalId={localData.id}/>
        </Confirm>
      </LocalTitle>
      <ItemsWrapper>
        {getItemsData?.Items.map(itemData => <EditItemBox key={itemData.id} itemData={itemData} refresh={toggleRefreshItems}/>)}
      
      <NewItem>
        <ItemName 
          placeholder='Nome do item'
          type='text'
          value={itemName}
          onChange={(e)=> setItemName(e.target.value)}
          disabled={false}
          required={true}
        /> 
        <QuantityBox
          type='text'
          placeholder="Qtdade."
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          pattern={[1,100]}
        >
        </QuantityBox>
        <UnitBox defaultValue={itemUnit} onChange={(e) => setItemUnit(e.target.value)}>
          <option value={'un'}>Un.</option>
          <option value={'kgs'}>Kgs</option>
        </UnitBox>
        <ItemConfirm onClick={()=>submitItem()}>
          <SmallButton type={'confirm'}/>
        </ItemConfirm>
      </NewItem>
      </ItemsWrapper>
    </EditLocalBoxWrapper>
  )
}

const EditLocalBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LocalTitle = styled.div`
  position: relative;
  width: 100%;

  input{
    padding-right: 30px;
  }
`

const Confirm = styled.div`
  position: absolute;
  top: 15px;
  right: 0px;
`

const ItemsWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`

const NewItem = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #D7D2D2;
  color: #3C3C3C;
  gap: 10px;
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
    background-color: #D7D2D2;
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

const ItemConfirm = styled.div`
  position: relative;
  font-size: 16px;
  color: #D88416;
`