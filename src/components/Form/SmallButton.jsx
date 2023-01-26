import styled from "styled-components";

export default function SmallButton({children, ...props}){
  return(
    <SmallButtonWrapper onClick={props.onClick} topMargin={props.topMargin} bottomMargin={props.bottomMargin}>
      {children}
    </SmallButtonWrapper>
  )
}

const SmallButtonWrapper = styled.button`
  width: auto;
  height: 20px;
  color: #B1B1B1;
  background-color: #FFFFFF;
  border: 1px solid #D7D2D2;
  border-radius: 5px;
  font-size: 10px;

  :active{
    transform: translate(1px, 2px);
  }
`
