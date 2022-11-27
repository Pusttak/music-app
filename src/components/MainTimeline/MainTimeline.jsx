import { useSelector } from 'react-redux';

import { currentTimeSelector, audioDurationSelector } from 'redux/player/player-selectors';
import InputRange from 'components/InputRange';
import { calculateTime } from 'utils/calculateTime';
import s from './MainTimeline.module.scss';

const MainTimeline = ({ onCurrentTime }) => {
  const currentTime = useSelector(currentTimeSelector);
  const duration = useSelector(audioDurationSelector);

  return (
    <div className={s.timeLine}>
      <span className={[s.time, s.currentTime].join(' ')}>{calculateTime(currentTime)}</span>
      <InputRange onChange={e => onCurrentTime(e.target.value)} max={Math.floor(duration)} value={currentTime} />
      <span className={[s.time, s.duration].join(' ')}>{calculateTime(duration)}</span>
    </div>
  );
};

export default MainTimeline;
