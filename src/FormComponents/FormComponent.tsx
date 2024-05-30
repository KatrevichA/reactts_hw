import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IPostModel} from "../models/IPostModel";
import {postService} from "../services/api.service";
import {IFormProps} from "../models/IFofmProps";



const FormComponent:FC = () => {

    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<IFormProps>({mode:"all", resolver:joiResolver(postValidator)});

    const [post, setPost] = useState<IPostModel | null>(null)


    const save = (post:IFormProps) => {
        postService.savePost(post).then (value => setPost(value.data))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('title')}/>
                {
                    errors.title && <span>{errors.title.message}</span>
                }
                <br/>
                <input type="text" {...register('body')} />
                {
                    errors.body && <span>{errors.body.message}</span>
                }
                <br/>
                <input type="number" {...register('userId')}/>
                {
                    errors.userId && <span>{errors.userId.message}</span>
                }
                <br/>
                <button type="submit">Save</button>
            </form>

            {/*or*/}

            {/*<h2>Save post {post?.id}</h2>*/}
            {post && <h2>Save post {post.id} {post.title}</h2>}

        </div>
    );
};

export default FormComponent;