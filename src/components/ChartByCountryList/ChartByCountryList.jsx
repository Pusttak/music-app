import { useGetChartByCountryQuery } from 'redux/music/services/audio-api';
import ChartByCountryCard from 'components/ChartByCountryCard';
import { useGetUserCountryCode } from 'hooks';
import { CrownIcon } from 'icons';
import SkeletonList from 'components/SkeletonList';
import s from './ChartByCountryList.module.scss';

const ChartByCountryList = ({ title, onPlay }) => {
  const [userCountryCode] = useGetUserCountryCode();
  const { data, isError, isLoading } = useGetChartByCountryQuery(userCountryCode, {
    skip: !userCountryCode,
  });

  return (
    <>
      {title && (
        <p className={s.title}>
          <CrownIcon size={18} />
          {title}
        </p>
      )}
      <div className={!title ? [s.list, s.short].join(' ') : s.list}>
        {!isError && isLoading ? (
          <SkeletonList />
        ) : data ? (
          <ChartByCountryCard trackList={data} onPlay={onPlay} />
        ) : (
          <SkeletonList />
        )}
      </div>
    </>
  );
};

export default ChartByCountryList;
