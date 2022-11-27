import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { currentTrack } from 'redux/music/music-slice';
import { currentTrackSelector } from 'redux/music/music-selectors';
import { isPlayingSelector } from 'redux/player/player-selectors';
import { PlayIcon2, PauseIcon } from 'icons';
import s from './ChartByCountryCard.module.scss';

const ChartByCountryCard = ({ trackList, onPlay }) => {
  const currentTrackId = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const dispatch = useDispatch();

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
    trackList && (
      <>
        <ul className={s.playlist}>
          {trackList.map(({ images, title, subtitle, key: trackId }, idx) => {
            return (
              <li className={currentTrackId === trackId ? [s.listItem, s.active].join(' ') : s.listItem} key={idx}>
                <div className={s.playIconBox} onClick={() => handleButtonPlayClick(trackId)}>
                  {currentTrackId !== trackId ? (
                    <PlayIcon2 size={15} color="white" />
                  ) : isPlaying ? (
                    <PauseIcon size={15} color="#6e32ff" />
                  ) : (
                    <PlayIcon2 size={15} color="#6e32ff" />
                  )}
                </div>
                <span className={s.trackNumber}>{idx + 1}</span>
                <Link to={`/tracks/${trackId}`}>
                  <div className={s.imageWrapper}>
                    <img src={images.coverart} alt={subtitle} />
                  </div>
                </Link>
                <div className={s.trackDataWrapper}>
                  <div className={s.trackName}>
                    <Link to={`/tracks/${trackId}`}>{title}</Link>
                  </div>
                  <span className={s.trackArtist}>
                    <Link to={`/artists/${subtitle.toLowerCase()}`}>{subtitle}</Link>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
};

export default ChartByCountryCard;
