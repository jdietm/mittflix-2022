import Provider from "./Provider";
import styles from './ProviderListGrid.module.css';


const ProviderListGrid = ({ providers }) => {
  return (
    <div className="titleList">
      <div className="title">
        <h7 className={styles.providerName}>Providers</h7>
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


