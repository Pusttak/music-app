import { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './SideMenu.module.scss';

const SideMenu = ({ title, list }) => {
  const [currentIdx, setCurrentIdx] = useState(null);
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    setCurrentIdx(ref.current);
  }, [currentIdx]);

  return (
    <div className={s.sideBar}>
      <p className={s.title}>{title}</p>
      <ul className={s.list}>
        {list.map((el, idx) => {
          return (
            <li key={idx} onClick={() => setCurrentIdx(idx)} className={idx === currentIdx ? `${s.isActive}` : null}>
              <NavLink
                to={el.path}
                className={({ isActive }) => {
                  if (isActive) {
                    ref.current = idx;
                  }
                  return isActive ? `${s.activeLink}` : `${s.link}`;
                }}
              >
                {el.icon}
                {el.name}
              </NavLink>
            </li>
          );
        })}
        {list[currentIdx]?.path === location.pathname && <div className={s.indicator}></div>}
      </ul>
    </div>
  );
};

export default SideMenu;
