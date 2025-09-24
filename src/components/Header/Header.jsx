import React from 'react';
import "./Header.css";
// import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>K C</div>
            <nav className='nav'>
                <ul>
                    <li><a href='#home'>01. Home</a></li>
                    <li><a href='#about'>02. About</a></li>
                    <li><a href='#works'>03. Works</a></li>
                    <li><a href='#skills'>04. Skills</a></li>
                    <li><a href='#certifications'>05. Certifications</a></li>
                    <li><a href='#contact'>06. Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header