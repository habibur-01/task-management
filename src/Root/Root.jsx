import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sharedComponent/Navbar/Navbar';
import Footer from '../sharedComponent/Footer/Footer';
// import DaisyNav from '../sharedComponent/Navbar/DaisyNav';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <DaisyNav></DaisyNav> */}
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;