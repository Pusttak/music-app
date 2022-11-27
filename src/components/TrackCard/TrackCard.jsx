import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { currentTrack } from 'redux/music/music-slice';
import { currentTrackSelector } from 'redux/music/music-selectors';
import { isPlayingSelector } from 'redux/player/player-selectors';
import { PlayIcon, PauseIcon } from 'icons';
import s from './TrackCard.module.scss';

const TrackCard = ({ track: { key: trackId, title, subtitle, images, artists }, onPlay }) => {
  const isPlaying = useSelector(isPlayingSelector);
  const currentTrackId = useSelector(currentTrackSelector);
  const dispatch = useDispatch();

  const aristId = artists?.[0]?.adamid;

  const handleButtonPlayClick = trackId => {
    if (trackId !== currentTrackId) {
      dispatch(currentTrack(trackId));
      return;
    }
    if (trackId === currentTrackId) {
      onPlay();
      return;
    }
  };

  return (
    <div className={s.card}>
      <Link to={`/tracks/${trackId}`} className={s.link}>
        <div className={s.coverart}>
          <img src={images?.coverart} alt={subtitle} />
        </div>
        <p className={s.title}>{title}</p>
      </Link>
      <div className={s.playIcon} onClick={() => handleButtonPlayClick(trackId)}>
        {isPlaying && trackId === currentTrackId ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
      </div>

      <Link to={`/artists/${aristId}`}>
        <p className={s.subtitle}>{subtitle}</p>
      </Link>
    </div>
  );
};

export default TrackCard;
