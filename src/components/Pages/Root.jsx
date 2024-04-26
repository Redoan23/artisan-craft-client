import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './NavFooter/Nav';
import Footer from './NavFooter/Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className=' max-w-screen-2xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;