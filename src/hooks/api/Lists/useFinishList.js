import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as listApi from '../../../services/listsApi';

export default function useFinishList() {
  const token = useToken();

  const {
    loading: finishListLoading,
    error: finishListError,
    act: finishList
  } = useAsync((listId) => listApi.postFinishList(listId, token), false);

  return {
    finishListLoading,
    finishListError,
    finishList
  };
}