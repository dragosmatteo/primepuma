import React from "react";
import { Link } from "react-router-dom";

import data from "./sections.json";
console.log(data);

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <Link to='/home'>
                    <img src={require('./prime-puma.png')} alt="" className="logo" />
                </Link>
            </div>
            <nav>
                {
                    data.sections.map((sect, index) => {
                        return (
                            <Link key={index} to={`/${sect.name}`}>{sect.name}</Link>
                        )
                    })
                }
            </nav>
        </header>
    )
}

export default Header;