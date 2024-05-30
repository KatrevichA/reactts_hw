import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {IFormProps} from "../models/IFofmProps";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const postService = {
    getAllPosts: () => {return axiosInstance.get('/posts')},
    savePost: ({title, body, userId}:IFormProps): Promise<AxiosResponse<IPostModel>> => {
       return  axiosInstance.post(
            'posts',
            {title, body, userId},
            {headers: {'Content-Type': 'application/json'}}
        )


        // return fetch ('https://jsonplaceholder.typicode.com/posts',{
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title: title,
        //         body: body,
        //         userId: userId
        //     })
        // })
    }
}

export {
    postService
}