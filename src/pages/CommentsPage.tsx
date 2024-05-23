import React, {FC,useEffect, useState} from 'react';
import {ICommentModel} from "../model/ICommentModel";
import CommentsComponent from "../components/CommentsComponent";
import {userApiService} from "../services/api.service";
import {useLocation, useParams} from "react-router-dom";

const CommentsPage:FC = () => {

    const {id} = useParams();
    const location = useLocation();
    console.log(location)

    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        if (id) {
            userApiService.getCommentsOfPost(id)
                .then(value => setComments(value.data))
        }

    }, [id]);

    return (
        <div>
            <h3>Comments Post Component</h3>
            <CommentsComponent comments={comments}/>


        </div>
    );
};

export default CommentsPage;