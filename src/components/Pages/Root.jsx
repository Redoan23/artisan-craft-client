import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './NavFooter/Nav';
import Footer from './NavFooter/Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;