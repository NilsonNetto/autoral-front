import styled from "styled-components";

export default function ListMenu({show}){
  return(
    <ListMenuWrapper show={show}>
      <div>
        Compartilhar Lista
      </div>
      <div>
        Editar Lista
      </div>
      <div>
        Finalizar Lista
      </div>
    </ListMenuWrapper>
  )
}

const ListMenuWrapper = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  z-index: 1;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F4F4F4;
  border-radius: 5px;
  display: ${props => props.show ? 'flex' : 'none'};
  color: #D88416;
  font-size: 17px;
  font-weight: 400;
  padding: 10px;
  gap: 15px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.25);
`