import React from 'react';
import style from "../css_modules/friend.module.css";
import {Link} from "react-router-dom";
import {characters, homePage} from "../utils/constants";

const Friend = ({hero, number}) => {
    let styles = 'w-100 p-1 ';
    if (number === 7) {
        styles += style.bottomLeft;
    }
    if (number === 9) {
        styles += style.bottomRight;
    }
    return (
        <Link className='col-4' to={`/${homePage}/${hero}`}>
            <img className={styles} src={characters[hero].img} alt={characters[hero].name}/>
        </Link>
    );
};

export default Friend;