import axios, {AxiosResponse} from "axios";
import {UsersResponseModel} from "../models/responseModel/UsersResponseModel";
import {PostModel} from "../models/postModel/PostModel";

let axiosInstance =  axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json"
    }
})


const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get("/users");
}


// 'https://dummyjson.com/posts/user/5'
const getAllPostsOfUser =  (id: number): Promise<AxiosResponse<PostModel[]>>  => {
    return axiosInstance.get('/posts/user/' + id)
}


export {
    getAllUsers,
    getAllPostsOfUser
}