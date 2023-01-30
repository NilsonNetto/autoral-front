import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as shareApi from '../../../services/shareApi';

export default function usePostShare() {
  const token = useToken();

  const {
    loading: postShareLoading,
    error: postShareError,
    act: postShare
  } = useAsync((listId, data) => shareApi.postShare(listId, data, token), false);

  return {
    postShareLoading,
    postShareError,
    postShare
  };
}