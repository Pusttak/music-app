import { Link } from 'react-router-dom';

import s from './ArtistsCard.module.scss';

const ArtistsCard = ({ artist: { avatar, name, adamid } }) => {
  return (
    <div className={s.card}>
      <Link to={name.toLowerCase()}>
        <div className={s.coverart}>
          <img src={avatar} alt={name} />
        </div>
        <p className={s.title}>{name}</p>
      </Link>
    </div>
  );
};

export default ArtistsCard;
