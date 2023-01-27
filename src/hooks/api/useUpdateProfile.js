import useAsync from '../useAsync';
import useToken from '../useToken';

import * as profileApi from '../../services/profileApi';

export default function useUpdateProfile() {
  const token = useToken();

  const {
    data: updateProfileData,
    loading: updateProfileLoading,
    error: updateProfileError,
    act: updateProfile
  } = useAsync((data) => profileApi.updateProfile(data, token), false);

  return {
    updateProfileData,
    updateProfileLoading,
    updateProfileError,
    updateProfile
  };
}