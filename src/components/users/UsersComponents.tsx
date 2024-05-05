import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/userModel/UserModel";
import {getAllUsers} from "../../services/users.api.service";
import UserComponent from "../user/UserComponent";

const UsersComponents:FC = () => {

const [users, setUsers] = useState <IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data.users));
    }, []);


    return (
        <div>
            {
                users.map((value: IUserModel) => (
                    <UserComponent key = {value.id}
                                   id={value.id}
                                   firstName={value.firstName}
                                   image={value.image}
                          />
                ))
            }
        </div>
    );
};

export default UsersComponents;