import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as profileApi from '../../../services/profileApi';

export default function useGetProfile() {
  const token = useToken();

  const {
    data: getProfileData,
    loading: getProfileLoading,
    error: getProfileError,
    act: getProfile
  } = useAsync(() => profileApi.getProfile(token), true);

  return {
    getProfileData,
    getProfileLoading,
    getProfileError,
    getProfile
  };
}