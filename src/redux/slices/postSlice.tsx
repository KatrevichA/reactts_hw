import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service";

type PostSliceType ={
    posts:IPost[];
}

const postInitialState: PostSliceType = {
    posts:[]
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_,thunkAPI) => {
        const posts = await postService.getAll();
        return thunkAPI.fulfillWithValue(posts);
    }
)

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitialState,
    reducers:{},
    extraReducers: builder =>
        builder
        .addCase(
            loadPosts.fulfilled,
            (state, action)=>{
            state.posts = action.payload;
        })
})

export const postActions ={
    ...postSlice.actions,
    loadPosts,
}