import useAsync from '../useAsync';
import useToken from '../useToken';

import * as localsApi from '../../services/localsApi';

export default function useGetLocals(listId) {
  const token = useToken();

  const {
    data: getLocalsData,
    loading: getLocalsLoading,
    error: getLocalsError,
    act: getLocals
  } = useAsync(() => localsApi.getLocals(listId, token), true);

  return {
    getLocalsData,
    getLocalsLoading,
    getLocalsError,
    getLocals
  };
}