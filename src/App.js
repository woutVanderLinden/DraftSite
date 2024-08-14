import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar/Navbar.jsx";
import { Draft } from "./Drafting/Draft.jsx";
import "./App.css"

import azelfBackground from "./assets/Background/AzelfBackground3.jpg";
import caterpieBackground from "./assets/caterpie.png";
import {TopDraftBar} from "./Drafting/TopDraftBar";

export default function App() {
    const [imageName, setImage] = useState(azelfBackground);


    function Home() {

        setImage(azelfBackground);
        return(
            <div >
                <div className="welcome">
                     <h1>Welcome to nuzleague</h1>

                    <p>
                     This site is dedicated to help hosting pokémon drafts. <br/>
                        You can find many resources as well as a tool for organising and playing drafts on the site.
                        To help you on your way check the links above <br/>
                    </p>
                    <p>
                        <a className="UsefullLink" href="./JoinDraft">join</a>
                        <a className="UsefullLink" href="./HostDraft">host</a>
                    </p>
                </div>
                <div className= "grid-container">
                    <div className = "darkarea">
                        <div className="imagecontainer">
                            <img className="roundImage" src = {caterpieBackground}/>
                        </div>
                        <div className="textbar2">

                            <h1>What is a draft</h1>
                            <p>
                                A draft is a format where players will choose from a limited amount of pokémon in turn order with a limited amount of credits. This way you will explore various pokémons and strategies that are not applicable in standard competive pokémon games.
                            </p>
                        </div>
                     </div>
                    <div className = "lightarea">
                        <div className="textbar1">
                            <h1>Spice up your game</h1>
                            <p>
                                Nuzleague not only contains your standard resources for your pokémon drafts but also allows various alternative rules that will keep your games intresting.
                            </p>
                        </div>
                        <div className="imagecontainer">
                            <img className="roundImage" src = {caterpieBackground}/>
                        </div>
                    </div>
                    <div className = "darkarea">
                        <div className="imagecontainer">
                            <img className="roundImage" src = {caterpieBackground}/>
                        </div>
                        <div className="textbar2">
                            <h1>Why this site?</h1>
                            <p>
                                We used to draft with a bot on pokémon showdown but the process was tedious and lacked mobile support. I hope this site will work better and improve your experience. Any feedback is appreciated on my discord: baruk
                            </p>
                        </div>
                    </div>
                </div>

            </div>
    );

    }



    function Resources() {
        setImage(caterpieBackground);
        return(
        <h2>${imageName}</h2>

        );
    }

    function Tierlists() {
        return <h2>tierlists</h2>;
    }

    function Drafts() {
        return <div> <Draft/></div>;

    }

  return(
      <div className='background'>
          <div className='backgroundimage'  style={{backgroundImage: `url(${imageName})`}}>

          <Router>
            <div>
            <Navbar/>
              <Routes>
                <Route path="/Resources" element={<Resources/>}/>

                <Route path="/Tierlists"  element={<Tierlists/>}/>

                <Route path="/"  element={<Home/>}/>

                <Route path="/Drafts/*"  element={<Drafts/>}/>

              </Routes>
            </div>
          </Router>
          </div>


      </div>

  );
}


