const ShowDetails = ({ showDetails, onWatchList, toggle }) => {
  return (
    <>
      {showDetails ? (
        <div className="show-details">
          <img
            src={`https://image.tmdb.org/t/p/original${showDetails.backdrop_path}`}
            alt=""
          />
          <div className="show-details-inner">
            <h1>{showDetails.name}</h1>
            <div className="description">{showDetails.overview}</div>
            {onWatchList ? (
              <button onClick={() => toggle(showDetails)} className="remove-to-watchlist">
                - Remove from watch list
              </button>
            ) : (
              <button onClick={() => toggle(showDetails)} className="add-to-watchlist">+ Add to watch list</button>
            )}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default ShowDetails;