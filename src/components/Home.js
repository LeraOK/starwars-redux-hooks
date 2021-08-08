import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {defaultHero, keys} from "../utils/constants";
import {SWContext} from "../utils/context";

const Home = props => {
    const {changeHero} = useContext(SWContext);
    let key = props.match.params.hero;
    if (!keys.includes(key)) {
        key = defaultHero;
    }
    useEffect( ()=>{
        changeHero(key);
    },[props.match.params.hero])

        return (
            <main className="clearfix">
                <Hero hero={key}/>
                <DreamTeam hero={key}/>
                <FarGalaxy/>
            </main>
        );
}

export default Home;