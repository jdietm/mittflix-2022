import { Link } from 'react-router-dom';
import placeholder from '../assets/image-not-available.jpg';

const Provider = ({ provider }) => {
  const { provider_id, provider_name, logo_path } = provider;

  console.log("Console Log", provider);


  const poster = logo_path
    ? `https://image.tmdb.org/t/p/w500/${logo_path}`
    : placeholder;

  return (
    <div className="movie">
      <Link to={`/details/${provider_id}`}>
        <img src={poster} alt="Provider poster" />
        <div className="overlay">
          <div className="title">{provider_name}</div>
        </div>
      </Link>
    </div>
  );
};

export default Provider;
