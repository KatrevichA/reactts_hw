import React,{FC} from 'react';
import {IPostModel} from "../model/IPostModel";
import {NavLink, useLocation} from "react-router-dom";

interface IProps {
    post:IPostModel
}

const PostComponent:FC <IProps> = ({post}) => {

    const {state} = useLocation()
    console.log(state)

    return (
        <div>
            {post.userId} - {post.title}  <NavLink to="coment"> Comment</NavLink>
        </div>
    );
};

export default PostComponent;