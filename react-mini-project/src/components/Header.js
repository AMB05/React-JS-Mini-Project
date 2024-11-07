import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ padding: '10px 0', backgroundColor: '#282c34', color: 'white' }}>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <li>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
