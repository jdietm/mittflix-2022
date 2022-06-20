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
  let providerName = "";
  shows.length === 0 ? providerName = "Please enter a valid Provider" : providerName = provider_name;

  return (
    <>
      <TitleList
        key={shows.id}
        name={providerName}
        titles={shows}
        toggle={toggle}
        watchList={watchList}
      />
    </>
  );
};

export default ProviderShowsPage;
