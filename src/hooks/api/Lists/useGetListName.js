import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as listsApi from '../../../services/listsApi';

export default function useGetListName() {
  const token = useToken();

  const {
    data: getListNameData,
    loading: getListNameLoading,
    error: getListNameError,
    act: getListName
  } = useAsync((listId) => listsApi.getListName(listId, token), false);

  return {
    getListNameData,
    getListNameLoading,
    getListNameError,
    getListName
  };
}