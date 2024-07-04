import { RotatingLines } from 'react-loader-spinner';
import * as style from '../../sass/Module/Spinner.module.scss';

export const SpinnerLoader = () => {
  return (
    <div className={style.container}>
      <RotatingLines
        strokeColor="lavender"
        strokeWidth="4"
        animationDuration="0.8"
        width="96"
        visible={true}
      />
    </div>
  );
};