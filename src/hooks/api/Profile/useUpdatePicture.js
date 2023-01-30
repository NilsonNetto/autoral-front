import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as profileApi from '../../../services/profileApi';

export default function useUpdatePicture() {
  const token = useToken();

  const {
    data: updatePictureData,
    loading: updatePictureLoading,
    error: updatePictureError,
    act: updatePicture
  } = useAsync((data) => profileApi.updatePicture(data, token), false);

  return {
    updatePictureData,
    updatePictureLoading,
    updatePictureError,
    updatePicture
  };
}