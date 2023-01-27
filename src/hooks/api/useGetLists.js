import useAsync from '../useAsync';
import useToken from '../useToken';

import * as listsApi from '../../services/listsApi';

export default function useGetLists() {
  const token = useToken();

  const {
    data: getListsData,
    loading: getListsLoading,
    error: getListsError,
    act: getLists
  } = useAsync(() => listsApi.getLists(token), true);

  return {
    getListsData,
    getListsLoading,
    getListsError,
    getLists
  };
}