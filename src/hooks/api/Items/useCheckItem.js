import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as itemsApi from '../../../services/itemsApi';

export default function useCheckItem() {
  const token = useToken();

  const {
    loading: checkItemLoading,
    error: checkItemError,
    act: checkItem
  } = useAsync((itemId) => itemsApi.postCheckItem(itemId, token), false);

  return {
    checkItemLoading,
    checkItemError,
    checkItem
  };
}