import React from'react';
import * as style from "../../src/sass/Module/Loader.module.css";

const Loader = () => {
    return (
        <div className={style.loaderWrapper}>
            <div className={style.loader}>
                <span className={style.loaderName}></span>
            </div>
        </div>
    )};

export default Loader;