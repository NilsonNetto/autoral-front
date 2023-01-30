import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as listApi from '../../../services/listsApi';

export default function usedeleteList() {
  const token = useToken();

  const {
    loading: deleteListLoading,
    error: deleteListError,
    act: deleteList
  } = useAsync((listId) => listApi.deleteList(listId, token), false);

  return {
    deleteListLoading,
    deleteListError,
    deleteList
  };
}