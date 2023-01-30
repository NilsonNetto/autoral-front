import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as shareApi from '../../../services/shareApi';

export default function useGetShared() {
  const token = useToken();

  const {
    data: getSharedData,
    loading: getSharedLoading,
    error: getSharedError,
    act: getShared
  } = useAsync(() => shareApi.getShared(token), true);

  return {
    getSharedData,
    getSharedLoading,
    getSharedError,
    getShared
  };
}