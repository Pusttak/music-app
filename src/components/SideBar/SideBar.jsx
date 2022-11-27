import SideMenu from 'components/SideMenu';
import { mainMenuData, playlistData } from 'utils';
import s from './SideBar.module.scss';

const SideBar = () => {
  return (
    <div className={s.sideBar}>
      <SideMenu title="Browse Music" list={mainMenuData} />
      <SideMenu title="Playlist" list={playlistData} />
    </div>
  );
};

export default SideBar;
