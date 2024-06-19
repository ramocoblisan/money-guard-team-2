import React from'react';
import style from "./Loader.modul.css"

const Loader = () => {
    return (
        <div className={style.loaderWrapper}>
            <div className={style.loader}>
                <span className={style.loaderName}></span>
            </div>
        </div>
    )};

export default Loader;