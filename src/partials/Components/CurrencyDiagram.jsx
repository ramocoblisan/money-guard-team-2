import React from 'react';
import * as styles from '../../sass/Module/CurrencyDiagram.module.css';
import image from '../../images/currency.png';
import imageTab from '../../images/currencyTab.png';

const CurrencyDiagram = ({ currency, isBigScreen, isTabletOrMobile }) => {
  const generateId = () => Math.random().toString(36).substr(2, 9);

  return (
    <div>
      <div className={styles.currencyDiagram}>
        {currency &&
          Object.keys(currency).map(key => {
            if (key === 'USD') {
              return (
                <div key={generateId()} className={styles.lowerNumber}>
                  {Number(currency[key]).toFixed(2)} RON
                </div>
              );
            }
            return null;
          })}
        {currency &&
          Object.keys(currency).map(key => {
            if (key === 'EUR') {
              return (
                <div key={generateId()} className={styles.higherNumber}>
                  {Number(currency[key]).toFixed(2)} RON
                </div>
              );
            }
            return null;
          })}
        {isBigScreen && (
          <img
            src={image}
            alt="Currency Diagram"
            className={styles.diagramImage}
          />
        )}
        {isTabletOrMobile && (
          <img
            src={imageTab}
            alt="Currency Diagram"
            className={styles.diagramImage}
          />
        )}
      </div>
    </div>
  );
};

export default CurrencyDiagram;
