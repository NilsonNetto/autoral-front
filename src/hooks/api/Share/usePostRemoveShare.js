import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as shareApi from '../../../services/shareApi';

export default function usePostRemoveShare() {
  const token = useToken();

  const {
    loading: postRemoveShareLoading,
    error: postRemoveShareError,
    act: postRemoveShare
  } = useAsync((requestId) => shareApi.postRemoveShare(requestId, token), false);

  return {
    postRemoveShareLoading,
    postRemoveShareError,
    postRemoveShare
  };
}