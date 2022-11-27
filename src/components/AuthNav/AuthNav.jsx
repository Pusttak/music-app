import image from 'img/images.jpg';
import User from 'components/User';
// import UserMenu from "components/UserMenu";
import s from './AuthNav.module.scss';

const AuthNav = () => {
  // const [userName, setUserName] = useState("");

  return (
    <div className={s.wrap}>
      <User user="" avatar={image} />
      {/* <UserMenu onSetUserName={setUserName} /> */}
    </div>
  );
};

export default AuthNav;
