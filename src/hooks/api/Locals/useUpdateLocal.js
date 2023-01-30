import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as localsApi from '../../../services/localsApi';

export default function useUpdateLocal() {
  const token = useToken();

  const {
    loading: updateLocalLoading,
    error: updateLocalError,
    act: updateLocal
  } = useAsync((listLocalId, data) => localsApi.putLocal(listLocalId, data, token), false);

  return {
    updateLocalLoading,
    updateLocalError,
    updateLocal
  };
}