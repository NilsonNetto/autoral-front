import styled from "styled-components";

export default function Header ({children}){
  return(
    <HeaderContainer>
      <HeaderText>
        {children}
      </HeaderText>
      <HeaderLine />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 55px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0 45px;
`

const HeaderText = styled.div`
  width: 100%;
  height: 100%;
  color: #E58C8A;
  font-size: 25px;
  font-weight: 400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  margin-bottom: 7px;
`

const HeaderLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #E58C8A;
`