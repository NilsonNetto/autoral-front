import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as shareApi from '../../../services/shareApi';

export default function useGetSharedOwned() {
  const token = useToken();

  const {
    data: getSharedOwnedData,
    loading: getSharedOwnedLoading,
    error: getSharedOwnedError,
    act: getSharedOwned
  } = useAsync(() => shareApi.getSharedOwned(token), true);

  return {
    getSharedOwnedData,
    getSharedOwnedLoading,
    getSharedOwnedError,
    getSharedOwned
  };
}