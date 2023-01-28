import useAsync from '../useAsync';
import useToken from '../useToken';

import * as itemsApi from '../../services/itemsApi';

export default function usePostItem() {
  const token = useToken();

  const {
    loading: postItemLoading,
    error: postItemError,
    act: postItem
  } = useAsync((listId, data) => itemsApi.postItem(listId, data, token), false);

  return {
    postItemLoading,
    postItemError,
    postItem
  };
}