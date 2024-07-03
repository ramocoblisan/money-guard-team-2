import React from'react';
import * as style from "../../sass/Module/Loader.module.scss";

const Loader = () => {
    return (
        <div className={style.loaderWrapper}>
            <div className={style.loader}>
                <span className={style.loaderName}></span>
            </div>
        </div>
    )};

export default Loader;