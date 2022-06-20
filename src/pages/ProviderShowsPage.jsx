import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowsByProviderId } from '../services/tmdb-api';

import TitleList from '../components/TitleList';


const ProviderShowsPage = ({ watchList, toggle }) => {
  const [shows, setShows] = useState([]);
  const { provider_id } = useParams();
  console.log("From ProviderShowPage", provider_id)
    ;
  useEffect(() => {
    getShowsByProviderId(provider_id).then((shows) => setShows(shows));
  }, [provider_id]);

  return (
    <>
      <TitleList
        key={shows.id}
        name={"Harcoded"}
        titles={shows}
        toggle={toggle}
        watchList={watchList}
      />
    </>
  );
};

export default ProviderShowsPage;
