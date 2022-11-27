import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { currentTrackSelector } from 'redux/music/music-selectors';
import { isOpenPlayerBarSelector } from 'redux/player/player-selectors';
import { useGetTrackByIdQuery } from 'redux/music/services/audio-api';
import { TracksIcon } from 'icons';
import s from './TrackSideBar.module.scss';

const TrackSideBar = () => {
  const currentTrackId = useSelector(currentTrackSelector);
  const isOpen = useSelector(isOpenPlayerBarSelector);
  const { data } = useGetTrackByIdQuery(currentTrackId, {
    skip: !currentTrackId,
  });

  return (
    <div className={s.sideBarWrapper}>
      <div className={s.titleBar}>
        <TracksIcon />
        <span>Now Playing</span>
      </div>
      {data && (
        <>
          <div className={s.trackData}>
            <Link to={`/tracks/${data.key}`}>
              <div className={s.imageWrapper}>
                <img src={data?.images?.coverart} alt={data?.subtitle} />
              </div>
            </Link>
            <span className={s.title}>{data?.title}</span>
            <span className={s.subtitle}>{data?.subtitle}</span>
            <span className={s.album}>
              {data?.sections?.[0]?.metadata[0]?.text} ({data?.sections?.[0]?.metadata[2]?.text})
            </span>
          </div>
          <>
            {data?.sections?.[1]?.text && (
              <>
                <div className={s.lyricsTitle}>Lyrics</div>
                <div className={s.lyricsWrapper}>
                  <ul className={isOpen && currentTrackId ? [s.lyrics, s.short].join(' ') : s.lyrics}>
                    {data.sections[1].text.map((string, idx) => (
                      <li key={idx} className={s.string}>
                        {string}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

export default TrackSideBar;
