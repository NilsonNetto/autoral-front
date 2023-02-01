import styled from "styled-components"

import { Oval } from 'react-loader-spinner'

export default function Loading() {
  return (
    <LoadingStyle>
      <Oval ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={7}
        strokeWidthSecondary={5}
        color="white"
        secondaryColor="#6c5a9c" />
        <LoadingText>
          CARREGANDO
        </LoadingText>
    </LoadingStyle>
  )
}

const LoadingStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #3C3C3C;
`