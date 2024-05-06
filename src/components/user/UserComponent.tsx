import React, {FC} from 'react';
import {IUserModel} from "../../models/userModel/UserModel";

interface IProps {
    user: IUserModel;
}

type IPostsType = IProps &  {children?: React.ReactNode} & {lift?:(userId:number) => void};


const UserComponent:FC <IPostsType> = ({user, lift}) => {

    const onclickHandler = () => {
        if (lift) {
            lift(user.id);
        }
    };

    return (
        <div>

            <div>
                <h4>{user.id} - {user.firstName}</h4>
                <img src={user.image} key={user.id} alt={user.firstName}/>
            </div>

            <button onClick={onclickHandler}>Click Me</button>

            <hr/>

        </div>
    );
};

export default UserComponent;