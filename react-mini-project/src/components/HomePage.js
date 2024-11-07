import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const HomePage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ padding: '20px', backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <h1>Welcome to the Home Page</h1>
            <button onClick={toggleTheme} style={{ padding: '10px', backgroundColor: theme === 'dark' ? '#fff' : '#333', color: theme === 'dark' ? '#000' : '#fff' }}>
                Toggle Theme
            </button>
        </div>
    );
};

export default HomePage;
