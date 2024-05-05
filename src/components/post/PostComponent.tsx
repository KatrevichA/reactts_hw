import React,{FC} from 'react';
import {PostModel} from "../../models/postModel/PostModel";

interface IPost {
    post: PostModel
}

export type IPostType = IPost & {children?: React.ReactNode};

const PostComponent:FC <IPostType> = ({post}) => {



    return (
        <div>
            <h4>{post.id} - {post.title} - {post.body} - {post.userId} - {post.tags} - {post.reactions}</h4>
        </div>
    );
};

export default PostComponent;