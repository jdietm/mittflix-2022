import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowsByProviderId } from '../services/tmdb-api';

import TitleList from '../components/TitleList';


const ProviderShowsPage = ({ watchList, toggle }) => {
  const [shows, setShows] = useState([]);
  const { provider_id, provider_name } = useParams();

  useEffect(() => {
    getShowsByProviderId(provider_id).then((shows) => setShows(shows));
  }, [provider_id]);
  console.log(shows);
  return (
    <>
      <TitleList
        key={shows.id}
        name={provider_name}
        titles={shows}
        toggle={toggle}
        watchList={watchList}
      />
    </>
  );
};

export default ProviderShowsPage;
