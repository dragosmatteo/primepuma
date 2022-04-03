import React from "react";
import './Calculator.styles.scss';

// COMPONENTS
import Header from "../../components/Header/Header.component";

const CalculatorPage = () => {
    return (
        <div className="calculator__page">
            <Header />
            <h1>Calculator Page</h1>
        </div>
    )
}

export default CalculatorPage;