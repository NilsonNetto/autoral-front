import styled from "styled-components";

export default function Button({children, ...props}){
  return(
    <ButtonWrapper onClick={props.onClick}>
      {children}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  width: 100%;
  height: 45px;
  color: #FFFFFF;
  background-color: #FCB75D;
  border: 2px solid #E58C8A;
  border-radius: 5px;

  :active{
    transform: translate(1px, 2px);
  }
`