import { useDispatch } from 'react-redux';

import { useGetChartByGenreQuery } from 'redux/music/services/audio-api';
import { currentGenre } from 'redux/music/music-slice';
import TrackCard from 'components/TrackCard';
import { useError } from 'hooks';
import { ShowMoreIcon } from 'icons/ShowMoreIcon';
import s from './ShortTracksList.module.scss';

const ShortTracksList = ({ option, onPlay }) => {
  const dispatch = useDispatch();
  const { data, isError, error } = useGetChartByGenreQuery(option.value);
  useError(error);

  return (
    !isError && (
      <div className={s.listWrapper}>
        <div className={s.textWrapper}>
          <span className={s.title}>{option.title}</span>
          <span className={s.text} onClick={() => dispatch(currentGenre(option))}>
            See all
            <ShowMoreIcon />
          </span>
        </div>
        <div className={s.musicWrapper}>
          <ul className={s.list}>
            {data?.slice(0, 8).map((track, idx) => (
              <li key={idx} className={s.item}>
                <TrackCard track={track} onPlay={onPlay} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default ShortTracksList;
