import React from 'react';
import {starsWarsInfo} from "../utils/constants";
import style from "../css_modules/fargalaxy.module.css"

const StarWars = () => {
    return (
        <div className={style.farGalaxy}>
            <p>{starsWarsInfo}</p>
        </div>
    );
};

export default StarWars;