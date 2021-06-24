import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header style={{ background: '#E5E5E5' }}>
            <Navbar></Navbar>
            <Banner></Banner>
        </header>
    );
};

export default Header;