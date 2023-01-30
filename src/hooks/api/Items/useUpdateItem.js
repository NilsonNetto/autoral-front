import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as itemsApi from '../../../services/itemsApi';

export default function useUpdateItem() {
  const token = useToken();

  const {
    loading: updateItemLoading,
    error: updateItemError,
    act: updateItem
  } = useAsync((itemId, data) => itemsApi.putItem(itemId, data, token), false);

  return {
    updateItemLoading,
    updateItemError,
    updateItem
  };
}