import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <br/>
            <Outlet/>
            <br/>
            <FooterComponent/>

        </div>
    );
};

export default MainLayout;