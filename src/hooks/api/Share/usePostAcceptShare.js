import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as shareApi from '../../../services/shareApi';

export default function usePostAcceptShare() {
  const token = useToken();

  const {
    loading: postAcceptShareLoading,
    error: postAcceptShareError,
    act: postAcceptShare
  } = useAsync((requestId) => shareApi.postAcceptShare(requestId, token), false);

  return {
    postAcceptShareLoading,
    postAcceptShareError,
    postAcceptShare
  };
}