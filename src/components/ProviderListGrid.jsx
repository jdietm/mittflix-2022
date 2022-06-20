import Provider from "./Provider";

const ProviderListGrid = ({ providers }) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>Providers</h1>
        <div className="titles-wrapper">
          {providers.map((provider) => {

            return (
              <Provider
                key={provider.id}
                provider={provider}
              />
            );
          })}
        </div>
      </div>
    </div>





  );
};

export default ProviderListGrid;


