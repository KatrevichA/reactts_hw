import React, {FC} from 'react';
import {ICommentModel} from "../model/ICommentModel";

interface IProps {
    comment:ICommentModel
}

const CommentComponent:FC <IProps> = ({comment}) => {
    return (
        <div>
            {comment.postId} - {comment.name}
        </div>
    );
};

export default CommentComponent;