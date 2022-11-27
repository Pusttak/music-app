import { useState } from 'react';

import s from './UserMenu.module.scss';
import { BurgerIcon } from 'icons';

const UserMenu = ({ onSetUserName }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    onSetUserName(e.target.elements.userName.value);
    e.target.reset();
  };

  return (
    <>
      <div className={s.menuWrap}>
        <BurgerIcon onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className={!isOpen ? [s.modal, s.ishiden].join(' ') : s.modal}>
        <h3 className={s.title}>Signup</h3>
        <form className={s.form} onSubmit={handleSubmit}>
          <input type="text" name="userName" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button className={s.button}>Signup</button>
        </form>
      </div>
    </>
  );
};

export default UserMenu;
