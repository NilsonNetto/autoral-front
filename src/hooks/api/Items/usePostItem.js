import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as itemsApi from '../../../services/itemsApi';

export default function usePostItem() {
  const token = useToken();

  const {
    loading: postItemLoading,
    error: postItemError,
    act: postItem
  } = useAsync((listLocalId, data) => itemsApi.postItem(listLocalId, data, token), false);

  return {
    postItemLoading,
    postItemError,
    postItem
  };
}