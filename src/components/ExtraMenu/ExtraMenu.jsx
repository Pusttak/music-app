import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TracksIcon } from 'icons';
import s from './ExtraMenu.module.scss';

const ExtraMenu = ({ list, action, stateOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={isOpen ? [s.menu, s.isOpen].join(' ') : [s.menu]}>
      <div
        className={s.menuTitle}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <TracksIcon size="14" />
        {stateOption || list?.[0]?.title}
      </div>
      <ul className={s.menuList}>
        {list.map((option, idx) => {
          return (
            <li key={idx} className={s.options} onClick={() => dispatch(action(option))}>
              {option.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExtraMenu;
