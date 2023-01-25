import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {RxHamburgerMenu, RxClock, RxPaperPlane, RxPerson} from "react-icons/rx"
import {IoMdCart} from "react-icons/io"

import MenuButton from "./MenuButton";

export default function Menu(){
  const location = useLocation();

  function selectButton(path){
    return location.pathname === path;
  }

  return(
    <FooterWrapper>
      <Link to="/lists">
        <MenuButton selected={selectButton('/lists')}>
          <RxHamburgerMenu/> 
          <p>Lista</p>
        </MenuButton>
      </Link>
      <Link to="/history">
        <MenuButton selected={selectButton('/history')}>
          <RxClock/> 
          <p>Histórico</p>
        </MenuButton>
      </Link>
      <Link to="/buy">
        <MenuButton selected={selectButton('/buy')}>
          <IoMdCart/> 
          <p>Iniciar<br/>compra</p>
        </MenuButton>
      </Link>
      <Link to="/share">
        <MenuButton selected={selectButton('/share')}>
          <RxPaperPlane/> 
          <p>Compartilhar</p>
        </MenuButton>
      </Link>
      <Link to="/profile">
        <MenuButton selected={selectButton('/profile')}>
          <RxPerson/> 
          <p>Perfil</p>
        </MenuButton>
      </Link>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 75px;
  background-color: #796AA1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  a{
    width: 100%;
    text-decoration: none;
  }
`