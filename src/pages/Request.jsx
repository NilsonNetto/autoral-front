import styled from "styled-components";
import { useEffect, useState } from "react";

import Loading from "./Loading";
import Header from "../components/Header/Header";
import Menu from "../components/FooterMenu/Menu";
import RequestBox from "../components/Share/RequestBox";

import useGetShareRequests from "../hooks/api/Share/useGetShareRequests";

export default function Request(){
  const { getShareRequestsData, getShareRequestsLoading, getShareRequests } = useGetShareRequests();
  const [refreshRequests,setRefreshRequests] = useState(false);

  useEffect(()=>{
    getShareRequests();
  }, [refreshRequests])

  function toggleRefreshRequests(){
    setRefreshRequests(!refreshRequests)
  }

  return(
    getShareRequestsLoading ? (
      <Loading />
    ) : (
      <RequestContainer>
        <Header>
          Solicitações
        </Header>
        <RequestsList>
          {getShareRequestsData?.map(request => <RequestBox key={request.id} requestData={request} refresh={toggleRefreshRequests}/>)}
        </RequestsList>
        <Menu />
      </RequestContainer>
    )
  )
}

const RequestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  margin-bottom: 80px;
  padding: 20px 35px;
  gap: 20px;
`

const RequestsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`