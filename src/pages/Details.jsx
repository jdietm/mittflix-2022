import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../services/tmdb-api';

import ShowDetails from '../components/ShowDetails';


const DetailsPage = ({ watchList, toggle }) => {
  const [showDetails, setShowDetails] = useState(null);
  const { id } = useParams();

  const onWatchList =
    watchList.findIndex((item) => item.id === showDetails?.id) === -1
      ? false
      : true;

  useEffect(() => {
    getShowDetails(id).then((details) => setShowDetails(details));
  }, [id]);

  return (
    <>
      <ShowDetails
        showDetails={showDetails}
        onWatchList={onWatchList}
        toggle={toggle}
      />
    </>
  );
};

export default DetailsPage;
