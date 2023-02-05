import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "./Loading";
import Menu from "../components/FooterMenu/Menu";
import Button from "../components/Form/Button";
import Header from "../components/Header/Header";
import SharedLists from "../components/Share/SharedLists";

import useGetShared from "../hooks/api/Share/useGetShared";
import useGetSharedOwned from "../hooks/api/Share/useGetSharedOwned";
import useGetShareRequest from "../hooks/api/Share/useGetShareRequests";

export default function Share(){
  const navigate = useNavigate();
  const [refreshShares, setRefreshShares] = useState(false);
  const { getSharedData, getSharedLoading } = useGetShared();
  const { getSharedOwnedData, getSharedOwned } = useGetSharedOwned();
  const { getShareRequestsData, getShareRequests } = useGetShareRequest();

  useEffect(()=>{
    getShareRequests();
    getSharedOwned();
  },[refreshShares])

  function toggleRefreshShares(){
    setRefreshShares(!refreshShares);
  }

  function requestPageRedirect(){
    if(getShareRequestsData.length !== 0){
      navigate('/share/requests');
    }
  }

  return(
    getSharedLoading ? (
      <Loading />
    ) : (
      <ShareContainer>
        <Header>
          Compartilhar
        </Header>
        <Button onClick={requestPageRedirect}>
          { getShareRequestsData?.length === 0 ? (
            'Você não tem novas solicitações'
          ) : ( getShareRequestsData?.length === 1 ? (
            `Você tem 1 nova solicitação`
          ) : (
            `Você tem ${getShareRequestsData?.length} novas solicitações`
          ))}
        </Button>
        <SharedLists listsData={getSharedData} refresh={toggleRefreshShares}>
          Listas compartilhadas comigo
        </SharedLists>
        <SharedLists listsData={getSharedOwnedData} refresh={toggleRefreshShares}>
          Listas que compartilhei
        </SharedLists>
        <Menu />
      </ShareContainer>
    )
  )
}

const ShareContainer = styled.div`
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