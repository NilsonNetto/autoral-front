import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as localsApi from '../../../services/localsApi';

export default function usePostLocal() {
  const token = useToken();

  const {
    loading: postLocalLoading,
    error: postLocalError,
    act: postLocal
  } = useAsync((listId, data) => localsApi.postLocal(listId, data, token), false);

  return {
    postLocalLoading,
    postLocalError,
    postLocal
  };
}