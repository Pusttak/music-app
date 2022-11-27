import s from './ExtraSideBar.module.scss';

const ExtraSideBar = ({ children, style }) => {
  return (
    <div className={s.barWrapper} style={style}>
      {children}
    </div>
  );
};

export default ExtraSideBar;
