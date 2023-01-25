import styled from "styled-components";

export default function MenuButton({selected, children}){
  return(
    <Wrapper selected={selected}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: 25px;
  color: ${props => props.selected ? '#FCB75D' : '#FFFFFF'};

  p{
    margin-top: 5px;
    font-size: 12px;
    font-weight: 500;
  }
`