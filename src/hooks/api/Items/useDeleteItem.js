import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as itemsApi from '../../../services/itemsApi';

export default function useDeleteItem() {
  const token = useToken();

  const {
    loading: deleteItemLoading,
    error: deleteItemError,
    act: deleteItem
  } = useAsync((itemId) => itemsApi.deleteItem(itemId, token), false);

  return {
    deleteItemLoading,
    deleteItemError,
    deleteItem
  };
}