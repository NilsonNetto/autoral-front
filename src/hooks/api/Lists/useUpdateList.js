import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as listApi from '../../../services/listsApi';

export default function useupdateList() {
  const token = useToken();

  const {
    loading: updateListLoading,
    error: updateListError,
    act: updateList
  } = useAsync((listId, data) => listApi.putList(listId, data, token), false);

  return {
    updateListLoading,
    updateListError,
    updateList
  };
}