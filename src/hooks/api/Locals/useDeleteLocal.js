import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as localsApi from '../../../services/localsApi';

export default function useDeleteLocal() {
  const token = useToken();

  const {
    loading: deleteLocalLoading,
    error: deleteLocalError,
    act: deleteLocal
  } = useAsync((listLocalId) => localsApi.deleteLocal(listLocalId, token), false);

  return {
    deleteLocalLoading,
    deleteLocalError,
    deleteLocal
  };
}