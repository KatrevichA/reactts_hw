import React from 'react';
import {useAppSelector} from "../redux/slices/store";

const PostsComponent = () => {

    let {posts} = useAppSelector(state => state.postSlice)

    return (
        <div>
            {
                posts.map(post => (<div key={post.id}>{post.title}</div>))
            }
        </div>
    );
};

export default PostsComponent;