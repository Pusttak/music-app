import AppdBar from 'components/AppBar';
import MainLayout from 'components/MainLayout';
import SideBar from 'components/SideBar';
import s from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <div className={s.app}>
      <AppdBar />
      <div className={s.wrapper}>
        <SideBar />
        <div className={s.mainContent}>
          <MainLayout />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
