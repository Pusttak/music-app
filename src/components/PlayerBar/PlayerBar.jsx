import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useGetTrackByIdQuery } from 'redux/music/services/audio-api';
import { playerIsOpen } from 'redux/player/player-slice';
import { currentTrackSelector } from 'redux/music/music-selectors';
import { isOpenPlayerBarSelector, isPlayingSelector } from 'redux/player/player-selectors';
import Player from 'components/Player';
import VolumeBar from 'components/VolumeBar';
import InputRange from 'components/InputRange';
import { Vinyl } from 'components/Loader';
import { ArrowMaximizeIcon, ArrowMinimizeIcon } from 'icons';
import s from './PlayerBar.module.scss';

import { currentTimeSelector, audioDurationSelector } from 'redux/player/player-selectors';

const PlayerBar = ({ play, volumeChange, isLoop, isMuted, currentTimeChange }) => {
  const isOpen = useSelector(isOpenPlayerBarSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const currentTrackId = useSelector(currentTrackSelector);
  const dispatch = useDispatch();

  const currentTime = useSelector(currentTimeSelector);
  const duration = useSelector(audioDurationSelector);

  const { data, isError, isLoading } = useGetTrackByIdQuery(currentTrackId, {
    skip: !currentTrackId,
  });

  return (
    !isError && (
      <>
        (
        <div className={isOpen && currentTrackId ? [s.playerBar, s.isOpen].join(' ') : s.playerBar}>
          {!isOpen && (
            <div className={!isOpen && currentTrackId ? [s.slimTimeline, s.isOpen].join(' ') : s.slimTimeline}>
              <InputRange
                onChange={e => currentTimeChange(e.target.value)}
                max={Math.floor(duration)}
                value={currentTime}
              />
              <ArrowMaximizeIcon onClick={() => dispatch(playerIsOpen(!isOpen))} />
            </div>
          )}
          <Link to={`/tracks/${currentTrackId}`}>
            <div className={s.trackData}>
              {isLoading ? (
                <Vinyl size={65} />
              ) : (
                <>
                  <div className={!isPlaying ? [s.imageWrapper, s.animated].join(' ') : s.imageWrapper}>
                    <img src={data?.images?.coverart} alt={data?.subtitle} />
                  </div>
                  <div>
                    <div className={s.title}>{data?.title}</div>
                    <div className={s.subtitle}>{data?.subtitle}</div>
                  </div>
                </>
              )}
            </div>
          </Link>
          <div className={s.controls}>
            <Player onPlay={play} onLoop={isLoop} onCurrentTime={currentTimeChange} data={data} />
          </div>
          <div className={s.extraControls}>
            <VolumeBar onVolumeChange={volumeChange} isMuted={isMuted} />
            <ArrowMinimizeIcon className={s.closeIcon} onClick={() => dispatch(playerIsOpen(!isOpen))} />
          </div>
        </div>
        )
      </>
    )
  );
};

export default PlayerBar;
