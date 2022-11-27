import { useState, useEffect } from 'react';

import { ArrowNextIcon, ArrowPrevIcon } from 'icons';
import s from './ExtraSideBarMenu.module.scss';

const ExtraSideBarMenu = ({ children }) => {
  const [idx, setIdx] = useState(0);
  const [childrenArr, setChildrenArr] = useState([]);

  useEffect(() => {
    if (!children) {
      return;
    }
    const arraiChildren = children.filter(item => !!item);
    setChildrenArr(arraiChildren);
  }, [children]);

  const handleCLick = value => {
    if (value === 'prev' && idx !== 0) {
      setIdx(idx => idx - 1);
    }
    if (value === 'next' && childrenArr.length - 1 !== idx) {
      setIdx(idx => idx + 1);
    }
  };

  return (
    <div className={s.menuWrapper}>
      <ul className={s.menu}>
        <li onClick={() => handleCLick('prev')}>
          <div className={idx === 0 ? [s.button, s.disabled].join(' ') : s.button}>
            <ArrowPrevIcon size={20} />
          </div>
        </li>
        <li onClick={() => handleCLick('next')}>
          <div className={idx === childrenArr.length - 1 ? [s.button, s.disabled].join(' ') : s.button}>
            <ArrowNextIcon size={20} />
          </div>
        </li>
      </ul>
      {childrenArr[idx]}
    </div>
  );
};

export default ExtraSideBarMenu;
