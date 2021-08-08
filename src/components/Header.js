import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/constants";
import {SWContext} from "../utils/context";

const Header = () => {
    const value = useContext(SWContext);
    return (
            <header>
                <Navigation/>
                <h1 className="text-center py-3">{characters[value.hero].name}</h1>
            </header>
    );
};

export default Header;