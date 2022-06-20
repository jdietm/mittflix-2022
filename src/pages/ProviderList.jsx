import { useState, useEffect } from 'react';
import { getAllProviders } from '../services/tmdb-api';
import ProviderListGrid from '../components/ProviderListGrid';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getAllProviders(providers).then((providers) => setProviders(providers));
  }, []);


  return (
    <>
      <ProviderListGrid providers={providers} />
    </>
  );
};

export default ProviderList;
