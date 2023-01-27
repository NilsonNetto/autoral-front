import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useregister() {
  const {
    loading: registerLoading,
    error: registerError,
    act: register
  } = useAsync(authApi.register, false);

  return {
    registerLoading,
    registerError,
    register
  };
}