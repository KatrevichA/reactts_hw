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

const getAllPosts = (id:number): Promise<AxiosResponse<PostModel[]>> => {
    return axiosInstance.get("/posts/?userId="+id);
}

export {
    getAllUsers,
    getAllPosts
}