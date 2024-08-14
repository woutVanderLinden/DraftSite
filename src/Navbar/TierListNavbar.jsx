import React,{useState} from 'react';
import {Link} from "react-router-dom/dist/index";

import './TierListNavbar.css'
import  * as colors from '../Colors.js'
import DraftBox from "../Drafting/DraftBox"




export class TierListNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            currentTier: "All"


        }
    }





//{colors.backgroundColor(colors.tier1Color)}
    render () {
        return <div className="TierListNavigation">
            <nav>


                <ul className={this.state.menuOpen ? "open" : ""}>
                    <li>
                        <button className="Dropdown" onClick={() => {
                            this.setState(this.state.menuOpen = !this.state.menuOpen);

                        }}>
                            <div>
                                {this.state.currentTier}
                            </div>

                        </button>
                    </li>
                    <li>

                        <button style={colors.backgroundColor(colors.allColor)} onClick={() => {
                            this.props.onClicked([1,2,3,4,5], colors.allColor);

                        }}> All
                        </button>
                    </li>
                    <li>

                        <button style={colors.backgroundColor(colors.tier1Color)} onClick={() => {
                            this.props.onClicked([1],colors.tier1Color);

                        }}> Tier 1
                        </button>
                    </li>
                    <li>

                        <button style={colors.backgroundColor(colors.tier2Color)} onClick={() => {
                            this.props.onClicked([2],colors.tier2Color);

                        }}> Tier 2
                        </button>
                    </li>
                    <li>

                        <button style={colors.backgroundColor(colors.tier3Color)} onClick={() => {
                            this.props.onClicked([3],colors.tier3Color);

                        }}> Tier 3
                        </button>
                    </li>
                    <li>

                        <button style={colors.backgroundColor(colors.tier4Color)} onClick={() => {
                            this.props.onClicked([4],colors.tier4Color);

                        }}> Tier 4
                        </button>
                    </li>
                    <li>

                        <button style={colors.backgroundColor(colors.tier5Color)} onClick={() => {
                            this.props.onClicked([5],colors.tier5Color);

                        }}> Tier 5
                        </button>
                    </li>


                    <li>
                        <Link to="/Drafts/DraftBox" style={colors.backgroundColor(colors.draftColor)}>DraftBox</Link>
                    </li>
                    <li>
                        <Link to="/Drafts/Drafted" style={colors.backgroundColor(colors.draft2Color)}>Drafted</Link>
                    </li>

                </ul>
            </nav>
        </div>

    }
}