import s from './EmptyPage.module.scss';

const EmptyPage = ({ text = 'Nothing here yet' }) => {
  return (
    <div className={s.page}>
      <p className={s.text}>{text}</p>
    </div>
  );
};

export default EmptyPage;
