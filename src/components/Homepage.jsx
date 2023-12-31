import React, { useState, useEffect } from "react";
import './Homepage.scss'

function Homepage() {
    return (
        // HERO
        <div>
            <div className="home__hero-container">
                <div className="home__hero-text">
                    <h1>MISSION</h1>
                    <p>Our mission is to provide a space for anyone to heal trauma by offering free yin yoga and additonal resources proven to aide in the release of stagnant emotions in the body.</p>
                    <br />
                    <h1>VISION</h1>
                    <p>To support as many people as possible with their emotional health.</p>
                    <br />
                </div>
            </div>
        </div>
    )
};

export default Homepage;