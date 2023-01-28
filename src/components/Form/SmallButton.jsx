import styled from "styled-components";
import {GiCheckMark} from "react-icons/gi";
import {GoKebabVertical} from "react-icons/go";

export default function SmallButton({type}){
  return(
    <SmallButtonWrapper>
      {type === 'confirm' ? (
        <GiCheckMark />
      ) : (
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
  color: #29B91D;
`