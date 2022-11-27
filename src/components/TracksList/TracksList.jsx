import TrackCard from 'components/TrackCard';
import s from './TracksList.module.scss';

const TracksList = ({ dataList, onPlay }) => {
  return (
    <ul className={s.list}>
      {dataList.map(({ track }, idx) => (
        <li key={idx} className={s.item}>
          <TrackCard track={track} onPlay={onPlay} />
        </li>
      ))}
    </ul>
  );
};

export default TracksList;
