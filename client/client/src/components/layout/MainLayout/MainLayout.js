import React from 'react';
import NavBar from '../../features/NavBar/NavBar';

const MainLayout = ({ children }) => (
    <div>
        <NavBar />
        {children}
        <footer>footer</footer>
    </div>
);

export default MainLayout;