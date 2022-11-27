import ArtistsCard from 'components/ArtistsCard';
import s from './ArtistsList.module.scss';

const ArtistsList = ({ dataList }) => {
  return (
    <ul className={s.list}>
      {dataList.map(({ artist }, idx) => (
        <li key={idx} className={s.item}>
          <ArtistsCard artist={artist} />
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;
