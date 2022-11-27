import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { isErrorSelector } from 'redux/music/music-selectors';
import { Astronaut } from 'components/Loader';
import s from './Error.module.scss';

const Error = () => {
  const isErrorState = useSelector(isErrorSelector);

  const errorMessage = useMemo(() => {
    if (isErrorState?.status === 429) {
      return 'You have exceeded the MONTHLY quota for Requests on your current plan.';
    }
    return 'Something went wrong, please try again later.';
  }, [isErrorState]);

  return (
    <>
      <Astronaut size={350} style={{ margin: '0 auto' }} />
      <div className={s.wrapper}>
        <p className={s.error}>{errorMessage}</p>
      </div>
    </>
  );
};

export default Error;
