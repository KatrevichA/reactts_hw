import React, {FC} from 'react';
import {PostModel} from "../../models/postModel/PostModel";

interface IProps {
    post:PostModel;
}
type IPostType = IProps & {children?: React.ReactNode};

const PostComponent:FC<IPostType> = ({post}) => {
    return (
        <div>
            {post.id} {post.title}
        </div>
    );
};

export default PostComponent;