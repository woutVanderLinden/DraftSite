import React,{useState} from 'react';
import {Link} from "react-router-dom/dist/index";

import './Navbar.css'


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return<div className="TabNavigationBar">
    <nav>
        <div className="title">
            <Link to = "/"><img className="tokens" src="./assets/nuzleaf.png" Style = "width:40px"/> Nuzleague</Link>
        </div>

        <button className="Menu" onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("hi");

        }}>
            <div>
            <span></span>
            <span></span>
            <span></span>
            </div>

        </button>


        <ul className={menuOpen ? "open":""}>
            <li>
                <Link to = "/Resources"><img className="tokens" src="./assets/mawile.png" />Resources</Link>
            </li>
            <li>
                <Link to = "/TierLists"> <img className="tokens" src="./assets/klawf.png" />Tierlists </Link>
            </li>
            <li>
                <Link to = "/Drafts"><img className="tokens" src="./assets/nidoqueen.png" />Drafts</Link>
            </li>
            <li>
                <Link to = "/JoinDraft"><img className="tokens" src="./assets/sirfetchd.png" />Join a draft</Link>
            </li>
            <li>
                <Link to = "/HostDraft"><img className="tokens" src="./assets/dragalge.png" />Host a Draft</Link>
            </li>
            <li>
                <Link to = "/About"><img className="tokens" src="./assets/victini.png" />About</Link>
            </li>

        </ul>
    </nav>
    </div>
}