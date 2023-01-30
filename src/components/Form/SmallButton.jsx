import styled from "styled-components";
import {RxUpdate} from "react-icons/rx";
import {GoPlus, GoKebabVertical} from "react-icons/go";

export default function SmallButton({type}){
  return(
    <SmallButtonWrapper>
      {type === 'confirm' ? (
        <GoPlus />
      ) : type === 'update' ? (
        <RxUpdate />
      ) :(
        <GoKebabVertical />
      )}
    </SmallButtonWrapper>
  )
}

const SmallButtonWrapper = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D88416;
`