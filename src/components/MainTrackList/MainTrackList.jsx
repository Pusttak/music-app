import TrackCard from 'components/TrackCard';
import s from './MainTrackList.module.scss';

const MainTrackList = ({ dataList, onPlay }) => {
  return (
    <ul className={s.list}>
      {dataList.map((track, idx) => (
        <li key={idx} className={s.item}>
          <TrackCard track={track} onPlay={onPlay} />
        </li>
      ))}
    </ul>
  );
};

export default MainTrackList;
