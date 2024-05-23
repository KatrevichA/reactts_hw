import React, {FC, useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {userApiService} from "../services/api.service";
import {IPostModel} from "../model/IPostModel";
import {useLocation, useParams} from "react-router-dom";


const PostsPage:FC = () => {
    const {id} = useParams();
    const location = useLocation();
    console.log(location)

    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        if (id) {
            userApiService.getPostsOfUser(id)
                .then(value => setPosts(value.data))
        }

    }, [id]);


    return (
        <div>
            <h3>Posts User Component</h3>
            <PostsComponent posts={posts}/>

        </div>
    );
};

export default PostsPage;