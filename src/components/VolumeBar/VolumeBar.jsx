import { useSelector } from 'react-redux';

import InputRange from 'components/InputRange';
import { isMutedSelector, volumeSelector } from 'redux/player/player-selectors';
import { VolumeOffIcon, VolumeUpIcon } from 'icons';
import s from './VolumeBar.module.scss';

const VolumeBar = ({ onVolumeChange, isMuted }) => {
  const isMutedState = useSelector(isMutedSelector);
  const volumeState = useSelector(volumeSelector);

  return (
    <div className={s.mutedWrapper}>
      {!isMutedState ? <VolumeUpIcon onClick={() => isMuted()} /> : <VolumeOffIcon onClick={() => isMuted()} />}
      <InputRange className={s.volume} onChange={e => onVolumeChange(e.target.value)} value={volumeState} />
    </div>
  );
};

export default VolumeBar;
