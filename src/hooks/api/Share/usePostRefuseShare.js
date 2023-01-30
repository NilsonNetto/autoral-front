import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as shareApi from '../../../services/shareApi';

export default function usePostRefuseShare() {
  const token = useToken();

  const {
    loading: postRefuseShareLoading,
    error: postRefuseShareError,
    act: postRefuseShare
  } = useAsync((requestId) => shareApi.postRefuseShare(requestId, token), false);

  return {
    postRefuseShareLoading,
    postRefuseShareError,
    postRefuseShare
  };
}