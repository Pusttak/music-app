import AuthNav from 'components/AuthNav';
// import Breadcrumbs from "components/Breadcrumbs";
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import s from './AppBar.module.scss';

const AppBar = () => (
  <div className={s.bar}>
    <Logo />
    {/* <Breadcrumbs /> */}
    <SearchBar />
    <AuthNav />
  </div>
);

export default AppBar;
