import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as listApi from '../../../services/listsApi';

export default function usePostList() {
  const token = useToken();

  const {
    loading: postListLoading,
    error: postListError,
    act: postList
  } = useAsync((data) => listApi.postList(data, token), false);

  return {
    postListLoading,
    postListError,
    postList
  };
}