import React from "react";
import './HomePage.styles.scss';

// COMPONENTS
import Header from '../../components/Header/Header.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage;