import React from "react";
import './HomePage.styles.scss';

// DATA
import { sections } from '../../assets/data.json';

const HomePage = () => {
    return (
        <div className="home__page">
            <div className="content">
                <div className="text first-text">
                    {/* <img className="puma-image top-puma" src={require('../../assets/images/home-puma/top-puma.png')} alt="chef puma" /> */}
                    <h1>welcome</h1>
                </div>
                <div className="text second-text">
                    {/* <img className="puma-image center-puma" src={require('../../assets/images/home-puma/center-puma.png')} alt="black punk puma" /> */}
                    <h1>to</h1>
                </div>
                <div className="text third-text">
                    {/* <img className="puma-image bottom-puma" src={require('../../assets/images/home-puma/bottom-puma.png')} alt="pink punk puma" /> */}
                    <h1>prime <span className="glowing-text">puma</span></h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage;