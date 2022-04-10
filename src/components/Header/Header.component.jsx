import React from "react";
import { Link } from "react-router-dom";
import './Header.styles.scss';
import data from "./header-assets/sections.json";

import { library } from "@fortawesome/fontawesome-svg-core";

const Header = () => {
    return (
        <header>
            <div className="inner">
                <div className="header__logo">
                    <Link to='/home'>
                        <img src={require('../../assets/images/prime-puma-logo.png')} alt="" className="logo" />
                    </Link>
                </div>
                <nav>
                    {
                        data.sections.map((sect, index) => {
                            console.log(index);
                            return (
                                <div className="nav-link-wrapper">
                                    <Link key={index} to={`/${sect.name}`} className={`nav-link`}>{sect.name}</Link>
                                </div>
                            )
                        })
                    }

                </nav>

                {window.screen.width > 768 ? null : <FontAwesomeIcon icon={["fa-solid", "fa-bars"]} />}
            </div>
        </header>
    )
}

export default Header;