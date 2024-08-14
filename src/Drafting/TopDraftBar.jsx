import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom/dist/index";


import "./TopDraftBar.css";



export const TopDraftBar = () => {

    const [pokemons, setPokemons] = useState(["Azelf","Caterpie","Caterpie"]);
    function StandardDraftLayout(){
        return <div>test</div>
    }


    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.TopDraftBar');
        const scrollTop = window.scrollY;
        scrollTop >= 170 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    let element = pokemons.map(function(object) {
        return (
            <div >
                <button className="PokemonButton"><div className="PokemonTitle">{object}</div>
                    <img className="PokemonImage" src="././assets/nuzleaf.png"/></button>
            </div>
        );
    });


   return <div className="TopDraftBar" >

       <div className="TopScrollBarTitle"> <h2>Your Current draft:</h2></div>
       <div className="ScrollTopBar" >

           {element}
       </div>
    </div>
}