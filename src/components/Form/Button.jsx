import styled from "styled-components";

export default function Button({children, ...props}){
  return(
    <ButtonWrapper onClick={props.onClick} topMargin={props.topMargin} bottomMargin={props.bottomMargin}>
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
  font-size: 18px;
  margin-top: ${ props => props.topMargin || "0"};
  margin-bottom: ${ props => props.bottomMargin || "0"};

  :active{
    transform: translate(1px, 2px);
  }
`