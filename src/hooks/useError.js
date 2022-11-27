import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isError } from 'redux/music/music-slice';
import { isErrorSelector } from 'redux/music/music-selectors';

export const useError = error => {
  const isErrorState = useSelector(isErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && !isErrorState) {
      dispatch(isError(error));
    }
    if (!error && isErrorState) {
      dispatch(isError(null));
    }
  }, [dispatch, error, isErrorState]);

  return isErrorState;
};
