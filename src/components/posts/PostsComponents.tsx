import React, {FC} from 'react';
import {PostModel} from "../../models/postModel/PostModel";
import PostComponent from "../post/PostComponent";



interface IProps {
    posts: PostModel[];
}

type IPropsType = IProps & {children?: React.ReactNode};


const PostsComponents:FC <IPropsType> = ({posts}) => {

    return (
        <div>

            {
                posts.map((post) => (<PostComponent post={post} />))
            }

        </div>
    );
};

export default PostsComponents;