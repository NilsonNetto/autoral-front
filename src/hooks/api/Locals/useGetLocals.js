import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as localsApi from '../../../services/localsApi';

export default function useGetLocals() {
  const token = useToken();

  const {
    data: getLocalsData,
    loading: getLocalsLoading,
    error: getLocalsError,
    act: getLocals
  } = useAsync((listId) => localsApi.getLocals(listId, token), false);

  return {
    getLocalsData,
    getLocalsLoading,
    getLocalsError,
    getLocals
  };
}