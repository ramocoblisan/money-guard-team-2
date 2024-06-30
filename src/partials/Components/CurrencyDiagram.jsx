import React from 'react';
import { nanoid } from 'nanoid';
import styles from '../../sass/Module/CurrencyDiagram.module.css';
import image from '../../images/currency.png';
import imageTab from '../../images/currencyTab.png';

const CurrencyDiagram = ({ currency, isBigScreen, isTabletOrMobile }) => {
  return (
    <div className={styles.CurrencyDiagramWrapper}>
      <div className={styles.currencyDiagram}>
        {currency &&
          Object.keys(currency).map(key => {
            if (key === 'USD') {
              return (
                <div key={nanoid()} className={styles.lowerNumber}>
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
                <div key={nanoid()} className={styles.higherNumber}>
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
