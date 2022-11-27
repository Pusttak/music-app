import s from './User.module.scss';

const User = ({ avatar, user }) => {
  return (
    <div className={s.userWrap}>
      <div className={s.avatar}>
        <div className={s.avatarWrap}>
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className={s.name}>Hello, {user || 'Guest'}</div>
    </div>
  );
};

export default User;
