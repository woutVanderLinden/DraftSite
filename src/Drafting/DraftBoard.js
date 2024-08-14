import React,{useState} from 'react';
import * as colors from "../Colors";


import Cookies from 'universal-cookie';
import './Draft.css'
import {TierListNavbar} from "../Navbar/TierListNavbar";
//import DraftBox from "./DraftBox"



export default class DraftBoard extends React.Component {
    constructor(props) {0..
        super(props);
        const cookies = new Cookies();
        const pokemons={
            pokemonlist:["Azelf","Caterpie","Caterpie"]
        };
        cookies.set("Pokemons",["Azelf"]);
        const tiersVisible = [1,2,3,4,5];
        const tier1Visible=true;

        this.state = {
            currentTierColor: colors.allColor,
            visibleTiers: [1,2,3,4,5],
            tier1box: <DraftBox name = "Tier 1" color = {colors.tier1Color} pokemonList = {pokemons.pokemonlist}  visible = {true} />,
            tier2box: <DraftBox name = "Tier 2" color = {colors.tier2Color} pokemonList = {pokemons.pokemonlist}  visible = {true} />,
            tier3box: <DraftBox name = "Tier 3" color = {colors.tier3Color} pokemonList = {pokemons.pokemonlist}  visible = {true} />,
            tier4box: <DraftBox name = "Tier 4" color = {colors.tier4Color} pokemonList = {pokemons.pokemonlist}  visible = {true} />,
            tier5box: <DraftBox name = "Tier 5" color = {colors.tier5Color} pokemonList = {pokemons.pokemonlist}  visible = {true} />,


        }
    };




    setTierVisible = (newList, newcolor) =>{
        newList.includes(1);
        this.state.currentTierColor = newcolor;
        this.setState({visibleTiers: newList});
        //setTierBoxVisibilities();
        //this.state.tier1box.setState({visible: this.state.visibleTiers.includes(1)});
    }

    allTiersVisible(visibletiers){
        let allTiersVisible = <span/>;
        let tier1box = <span/>;
        let tier2box = <span/>;
        let tier3box = <span/>;
        let tier4box = <span/>;
        let tier5box = <span/>;


        if(this.state.visibleTiers.includes(1)){
            tier1box = this.state.tier1box;
        }
        if(this.state.visibleTiers.includes(2)){
            tier2box = this.state.tier2box;
        }
        if(this.state.visibleTiers.includes(3)){
            tier3box = this.state.tier3box;
        }
        if(this.state.visibleTiers.includes(4)){
            tier4box = this.state.tier4box;
        }
        if(this.state.visibleTiers.includes(5)){
            tier5box = this.state.tier5box;
        }
        return <div>

            {tier1box}
            {tier2box}
            {tier3box}
            {tier4box}
            {tier5box}
        </div>
    }


    render (){
        const pokemons={
            pokemonlist:["Azelf","Caterpie","Caterpie"]
        };


        let element = pokemons.pokemonlist.map(function(object) {
            return (
                <div>
                    <button className="PokemonButton"><div className="PokemonTitle">{object}</div>
                        <img className="PokemonImage" src="././assets/nuzleaf.png"/></button>
                </div>
            );
        });

//


        return<div>
            {JSON.stringify(this.state.visibleTiers)}
            <TierListNavbar onClicked = {this.setTierVisible}/>
            <div className="TiersBox" style={colors.backgroundColor(this.state.currentTierColor)}>
                <div className="PlaceHolderTop"  style={colors.backgroundColor(this.state.currentTierColor)}></div>
                {this.allTiersVisible()}

                <div className="PlaceHolderBottom" style={colors.backgroundColor(this.state.currentTierColor)}></div>
            </div>
        </div>
    }



}

class DraftBox extends React.Component {


    constructor(props){
        super(props);
        this.state={
            color: this.props.color,
            pokemonList:  this.props.pokemonList,
            visible: this.props.visible,
        }

    }

    setVisible(newvalue){
        this.setState( {visible: {newvalue}});
    }
    elementCreation = () =>{
        return this.state.pokemonList.map(function(object) {
            return (
                <div >
                    <button className="PokemonButton"><div className="PokemonTitle">{object}</div>
                        <img className="PokemonImage" src="././assets/nuzleaf.png"/></button>
                </div>
            );
        });
    }


    render () {
        const pokemonlist = this.elementCreation();
        return <div className="TierBox"   style={colors.backgroundColor(this.props.color)}>
            <div className="PlaceHolderTop"></div>
            <div className="TierTitle" ><h3>{this.props.name}</h3></div>
            <div className="PokemonBox" >
                <div className="PokemonScrollBox">
                    {pokemonlist}
                </div>
            </div>
        </div>
    }
    /*
    setVisible = (newbool) =>{
        this.setState({visible: {newbool}});
    }

    render (){

        return   <div className={ this.state.visible? "Tier1Box": "ClosedBox"}  style={colors.backgroundColor(this.props.color)}>

            <div className="TierTitle" ><h3>Tier 1:</h3></div>
            <div className="PokemonBox" >
                <div className="PokemonScrollBox">
                    <!--   {this.state.pokemonlist} -->
                </div>
            </div>
        </div>
    }
    /*
        <div className={ this.state.visibleTiers.includes(1)? "Tier1Box" : "ClosedBox"}>

                <div className="TierTitle"  style={colors.backgroundColor(colors.tier1Color)}><h3>Tier 1:</h3></div>
                <div className="PokemonBox" style={colors.backgroundColor(colors.tier1Color)}>
                    <div className="PokemonScrollBox">
                        {element}
                    </div>
                </div>
            </div>

     */
    /*
    <div className={ this.state.visible? "Tier1Box": "ClosedBox"}  style={colors.backgroundColor(this.props.color)}>

            <div className="TierTitle" ><h3>Tier 1:</h3></div>
            <div className="PokemonBox" >
                <div className="PokemonScrollBox">
                 <!--   {this.state.pokemonlist} -->
                </div>
            </div>
        </div>
     */
}
/*<div className="TierBox">
            <div className="PlaceHolderTop"  style={colors.backgroundColor(currentTierColor)}></div>
            <DraftBox color = {colors.tier1Color} pokemonList = {element}  Visible = {tier1Visible} />
            <div className={ tier1Visible? "Tier1Box": "ClosedBox"}>

                <div className="TierTitle"  style={colors.backgroundColor(colors.tier1Color)}><h3>Tier 1:</h3></div>
                <div className="PokemonBox" style={colors.backgroundColor(colors.tier1Color)}>
                    <div className="PokemonScrollBox">
                        {element}
                    </div>
                </div>
            </div>

            <div className="Tier2Box" style={colors.backgroundColor(colors.tier2Color)}>
                <div className="PlaceHolderTop" style={colors.backgroundColor(colors.tier2Color)}></div>
                <div className="TierTitle" ><h3>Tier 2:</h3></div>
                <div className="PokemonBox" >
                    <div className="PokemonScrollBox">
                        {element}
                    </div>
                </div>
            </div>

            <div className="Tier3Box" style={colors.backgroundColor(colors.tier3Color)}>
                <div className="PlaceHolderTop"></div>
                <div className="TierTitle"><h3>Tier 3:</h3></div>
                <div className="PokemonBox">
                    <div className="PokemonScrollBox">
                        {element}
                    </div>
                </div>
            </div>

            <div className="Tier4Box" style={colors.backgroundColor(colors.tier4Color)}>
                <div className="PlaceHolderTop" ></div>
                <div className="TierTitle"><h3>Tier 4:</h3></div>
                <div className="PokemonBox">
                    <div className="PokemonScrollBox">
                        {element}
                    </div>
                </div>
            </div>

            <div className="Tier5Box" style={colors.backgroundColor(colors.tier5Color)}>
                <div className="PlaceHolderTop" ></div>
                <div className="TierTitle"><h3>Tier 5:</h3></div>
                <div className="PokemonBox">
                    <div className="PokemonScrollBox">
                        {element}
                    </div>
                </div>
            </div>
            <div className="PlaceHolderBottom" style={colors.backgroundColor(currentTierColor)}></div>
        </div>*/