import styled from "styled-components"

import Loading from "./Loading";
import Header from "../components/Header/Header"
import Menu from "../components/FooterMenu/Menu"
import ListBuyBox from "../components/Lists/ListBuyBox";
import EmptyLists from "../components/Lists/EmptyLists";

import useGetLists from "../hooks/api/Lists/useGetLists";

export default function Buy(){
  const { getListsData, getListsLoading } = useGetLists();

  return(
    getListsLoading ? (
      <Loading />
    ) : (
      <BuyContainer>
        <Header>
          Iniciar Compra
        </Header>
        <ListsWrapper>
          {getListsData?.length !== 0 ? (
            getListsData.map((listData) => <ListBuyBox key={listData.id} listData={listData} />)
          ) : (
            <EmptyLists />
          )}
        </ListsWrapper>
        <Menu />
      </BuyContainer>
    )
  )
}

const BuyContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 55px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ListsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  gap: 15px;
  margin-top: 15px;
`