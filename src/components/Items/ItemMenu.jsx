import styled from "styled-components";

export default function ItemMenu({show, setEditItem}){
  return(
    <ItemMenuWrapper show={show}>
      <div onClick={()=> setEditItem(true)}>
        Editar Item
      </div>
      <div>
        Excluir Item
      </div>
    </ItemMenuWrapper>
  )
}

const ItemMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F4F4F4;
  border-radius: 5px;
  display: ${props => props.show ? 'flex' : 'none'};
  color: #D88416;
  font-size: 15px;
  font-weight: 400;
  padding: 10px;
  gap: 15px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.25);
`