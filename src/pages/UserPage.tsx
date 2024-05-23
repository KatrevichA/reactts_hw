import React from 'react';
import {NavLink} from "react-router-dom";
import UserComponent from "../components/UserComponent";


const UserPage = () => {

    return (
        <div>
            <h3>User Page</h3>
            <UserComponent/> <NavLink to="post"> Post</NavLink>
        </div>
    );
};

export default UserPage;