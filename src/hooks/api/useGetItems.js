import useAsync from '../useAsync';
import useToken from '../useToken';

import * as itemsApi from '../../services/itemsApi';

export default function useGetItems(listLocalId) {
  const token = useToken();

  const {
    data: getItemsData,
    loading: getItemsLoading,
    error: getItemsError,
    act: getItems
  } = useAsync(() => itemsApi.getItems(listLocalId, token), true);

  return {
    getItemsData,
    getItemsLoading,
    getItemsError,
    getItems
  };
}