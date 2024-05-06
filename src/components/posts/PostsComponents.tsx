import React, {FC} from 'react';
import {PostModel} from "../../models/postModel/PostModel";
import PostComponent from "../post/PostComponent";

interface IProps {
    posts: PostModel[];
}

const PostsComponents:FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => (<PostComponent post={post} key={post.id}/>))}
        </div>
    );
};

export default PostsComponents;