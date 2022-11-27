import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useSearchMusicQuery } from 'redux/music/services/audio-api';
import { addPlaylist } from 'redux/music/music-slice';
import { currentTrackSelector } from 'redux/music/music-selectors';
import { isPlayingSelector } from 'redux/player/player-selectors';
import { PlayIcon2, PauseIcon, HeartIcon, HeartEmptyIcon } from 'icons';
import s from './Playlist.module.scss';

const Playlist = ({ artist, onLikesList, onTrackIsLIkes, onPlay }) => {
  const currentTrackId = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const { data } = useSearchMusicQuery(artist, { skip: !artist });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const playlist = data?.tracks?.hits.map(({ track }) => track.key);
      dispatch(addPlaylist(playlist));
    }
  }, [dispatch, data]);

  return (
    data && (
      <>
        <h2 className={s.title}>Shows you may like</h2>
        <ul className={s.playlist}>
          {data?.tracks?.hits.map(({ track: { images, title, subtitle, key: trackId, artists } }, idx) => {
            return (
              <li className={currentTrackId === trackId ? [s.listItem, s.active].join(' ') : s.listItem} key={idx}>
                <div className={s.playIconBox} onClick={() => onPlay(trackId)}>
                  {currentTrackId !== trackId ? (
                    <PlayIcon2 size={16} color="white" />
                  ) : isPlaying ? (
                    <PauseIcon size={16} color="#6e32ff" />
                  ) : (
                    <PlayIcon2 size={16} color="#6e32ff" />
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
                  <span className={s.trackArtist}>{subtitle}</span>
                  <span className={s.trackDuration}>{'01:29'}</span>
                  <div
                    className={s.trackLike}
                    onClick={() =>
                      onLikesList({
                        key: trackId,
                        title,
                        subtitle,
                        images,
                        artists,
                      })
                    }
                  >
                    {onTrackIsLIkes(trackId) ? <HeartIcon size={18} color="#6e32ff" /> : <HeartEmptyIcon size={18} />}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
};

export default Playlist;
