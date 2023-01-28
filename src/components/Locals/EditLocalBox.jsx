import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import CustomInput from "../Form/CustomInput";
import NewItemBox from "../Items/NewItemBox";
import ConfirmButton from "../Form/SmallButton";
import SmallButton from "../Form/SmallButton";

import usePostItem from "../../hooks/api/usePostItem";
import useGetItems from "../../hooks/api/useGetItems";

export default function EditLocalBox ({localData}){
  const [localName, setLocalName] = useState(localData.locals.name);
  const [itemCheck, setItemCheck] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemUnit, setItemUnit] = useState('');
  const { postItem } = usePostItem();
  const { getItemsData } = useGetItems(localData.id);

  async function submitItem(){
    const itemData = {
      name: itemName,
      quantity: Number(itemQuantity),
      unit: itemUnit
    }
    console.log(itemData);
    try {
      await postItem(localData.id, itemData);
      toast('Item inserido!');
    } catch (error) {
      toast('Não foi possível inserir o item!');
    }
  }

  console.log(getItemsData);

  return(
    <EditLocalBoxWrapper>
      <LocalTitle>
        <CustomInput 
          title='Nome do Local'
          placeholder='Nome do Local'
          type='text'
          value={localName}
          onChange={setLocalName}
          disabled={false}
          required={true}
          />
        <Confirm onClick={()=>submitLocal()}>
          <ConfirmButton />
        </Confirm>
      </LocalTitle>
{/*       <ItemsWrapper>
        <NewItemBox />
        <NewItemBox />
        <NewItemBox />
      </ItemsWrapper> */}
      <NewItem>
        <CheckBox
          type='checkbox'
          checked={itemCheck}
          onChange={() => setItemCheck(!itemCheck)}
        />
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
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          placeholder="Qtdade."
          pattern={[1,100]}
        >
        </QuantityBox>
        <UnitBox defaultValue={'un'} onChange={(e) => setItemUnit(e.target.value)}>
          <option value={'un'}>Un.</option>
          <option value={'kgs'}>Kgs</option>
        </UnitBox>
        <Confirm onClick={()=>submitItem()}>
          <SmallButton type={'confirm'}/>
        </Confirm>
      </NewItem>
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
  padding-right: 30px;
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