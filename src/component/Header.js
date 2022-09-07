import React from "react";

export default function Header() {
    return (
        <div className="header--container">
            <div className="title-section">
                <img src="images/logo.png" className="title-logo" alt="logo" />
                <h1 className="title-text">Meme Generator</h1>
            </div>
            <p className="right-section">React Course - Project 3</p>
        </div>
    )
}