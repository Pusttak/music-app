import s from './InputRange.module.scss';

const InputRange = ({ max = 100, value, onChange, className }) => {
  return (
    <input
      className={[s.customInput, className].join(' ')}
      type="range"
      min="0"
      max={max}
      onChange={onChange}
      style={{ backgroundSize: `${(value / max) * 100}% 100%` }}
      value={value}
    />
  );
};

export default InputRange;
