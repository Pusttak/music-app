import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { NawArrowRightIcon } from 'icons';
import { mainMenuData, playlistData } from 'utils';
import s from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ b = 'Eminem' }) => {
  const location = useLocation();

  const page = useMemo(() => {
    return [...mainMenuData, ...playlistData].find(
      el => el.path === location.pathname.split('/').splice(0, 2).join('/')
    );
  }, [location.pathname]);

  return (
    <div className={s.wrap}>
      {page?.name || 'Back'}
      <NawArrowRightIcon />
      <span>{b}</span>
    </div>
  );
};

export default Breadcrumbs;
