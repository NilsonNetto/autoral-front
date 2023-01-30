import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as localsApi from '../../../services/localsApi';

export default function useFinishLocal() {
  const token = useToken();

  const {
    loading: finishLocalLoading,
    error: finishLocalError,
    act: finishLocal
  } = useAsync((listLocalId) => localsApi.postFinishLocal(listLocalId, token), false);

  return {
    finishLocalLoading,
    finishLocalError,
    finishLocal
  };
}