import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as shareApi from '../../../services/shareApi';

export default function useGetShareRequests() {
  const token = useToken();

  const {
    data: getShareRequestsData,
    loading: getShareRequestsLoading,
    error: getShareRequestsError,
    act: getShareRequests
  } = useAsync(() => shareApi.getShareRequests(token), true);

  return {
    getShareRequestsData,
    getShareRequestsLoading,
    getShareRequestsError,
    getShareRequests
  };
}