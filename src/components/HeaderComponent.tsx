import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <span><NavLink to="/">home page</NavLink></span>
            <br/>
            <span><NavLink to="users">users page</NavLink></span>
            <br/>
            <span><NavLink to="post/:id/comments">comments page</NavLink></span>

        </div>
    );
};

export default HeaderComponent;