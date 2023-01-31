import styled from "styled-components";
import {BsCheck2, BsX} from "react-icons/bs"

export default function InputModal({children, ...props}){

  return(
    <ModalOverlay isOpen={props.isOpen}>
      <ConfirmModalWrapper>
        <ModalTitle>
          {children}
        </ModalTitle>
        <ModalInput
          placeholder={props.placeholder}
          type="text"
          value={props.value}
          onChange={(e) => {props.onChange(e.target.value)}}
        />
        <ModalOptions>
          <ConfirmBox onClick={() => props.confirm()}>
            <BsCheck2 />
            <span>CONFIRMAR</span>
          </ConfirmBox>
          <CancelBox onClick={() => props.toggleModal()}>
            <BsX/>
            <span>CANCELAR</span>
          </CancelBox>
        </ModalOptions>
      </ConfirmModalWrapper>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(255,255,255,0.75);
  align-items: center;
  justify-content: center;
`

const ConfirmModalWrapper = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #3C3C3C;
  border: 1px solid #B1B1B1;
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.25);
`

const ModalTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  border-bottom: 1px solid #B1B1B1;
  border-radius: 10px 10px 0 0;
  background-color: #FCB75D;
  color: #FFFFFF;
`

const ModalInput = styled.input`
  width: 90%;
  height: 60px;
  border: none;
  font-size: 20px;
  text-align: center;
  margin: 10px 0;

  :focus{
    outline: none;
  }

`

const ModalOptions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #B1B1B1;

  div{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ConfirmBox = styled.div`
  color: #29B91D;
  border-right: 1px solid #B1B1B1;
  font-size: 25px;

  span{
    font-size: 16px;
    color: #3C3C3C;
  }
`

const CancelBox = styled.div`
  color: #D81616;
  font-size: 35px;

  span{
    font-size: 16px;
    color: #3C3C3C;
  }
`