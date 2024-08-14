
import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { TierListNavbar } from "../Navbar/TierListNavbar.jsx";
import {TopDraftBar} from "./TopDraftBar";
import './Draft.css'
import  * as colors from '../Colors.js'
import DraftBoard from "./DraftBoard.js";

import caterpieBackground from "../assets/caterpie.png";


export const Draft = () => {

    const [pokemons, setPokemons] = useState(["Azelf","Caterpie","Caterpie"]);
    const [tiersVisible, setTiersVisible] = useState([1,2,3,4,5]);

    const [DraftboxVisible, setDraftboxVisible] = useState(false);
    const [DraftedVisible, setDraftedVisible] = useState(false);

    const [currentTierColor, setCurrentTierColor] = useState(colors.allColor);
    const newDraftBoard = <DraftBoard/>;
    let element = pokemons.map(function(object) {
        return (
            <div>
                <button className="PokemonButton"><div className="PokemonTitle">{object}</div>
                    <img className="PokemonImage" src="././assets/nuzleaf.png"/></button>
            </div>
        );
    });

    function StandardDraftLayout(){

        return newDraftBoard;
    }

    function GoToTier(color, newTiersVisible ){
        setCurrentTierColor(color);
        setTiersVisible(newTiersVisible);
    }

    function All() {

        return(
            <div></div>
        );
    }


    function Tier1() {

        return(
            <div></div>
        );
    }

    function Tier2() {

        return(
            <div></div>
        );
    }


    function Tier3() {

        return(
            <div></div>
        );
    }


    function Tier4() {

        return(
            <div></div>
        );
    }


    function Tier5() {

        return(
            <div></div>
        );
    }


    function DraftingBox() {

        return(
            <div></div>
        );
    }


    function Drafted() {

        return(
            <div></div>
        );
    }





    return <div>

    <div>
        <div className="PlaceHolder"></div>
        <TopDraftBar/>


       <StandardDraftLayout/>

    </div>

    </div>
}