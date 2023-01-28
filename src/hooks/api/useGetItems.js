import useAsync from '../useAsync';
import useToken from '../useToken';

import * as itemsApi from '../../services/itemsApi';

export default function useGetItems() {
  const token = useToken();

  const {
    data: getItemsData,
    loading: getItemsLoading,
    error: getItemsError,
    act: getItems
  } = useAsync((listLocalId) => itemsApi.getItems(listLocalId, token), false);

  return {
    getItemsData,
    getItemsLoading,
    getItemsError,
    getItems
  };
}