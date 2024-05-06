import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/userModel/UserModel";
import {getAllUsers} from "../../services/dummyjson.api.service";
import UserComponent from "../user/UserComponent";

type IUsersType = {lift?:(userId:number) => void};

const UsersComponents:FC<IUsersType> = ({lift}) => {

const [users, setUsers] = useState <IUserModel[]>([]);
    useEffect(() => {
        getAllUsers().then(({data:{users}}) => setUsers(users));
    }, []);


    return (
        <div>
            {
               users.map((user) => (
                   <UserComponent key={user.id} user={user} lift={lift}/>
               ))
            }
        </div>
    );
};

export default UsersComponents;