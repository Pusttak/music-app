import { Skeleton } from 'components/Loader';
import s from './SkeletonList.module.scss';

const SkeletonList = () => {
  return (
    <ul>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
      <li className={s.listItem}>
        <Skeleton size={300} />
      </li>
    </ul>
  );
};

export default SkeletonList;
