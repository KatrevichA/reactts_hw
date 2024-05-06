import React, {useState} from 'react';
import './App.css';
import UsersComponents from "./components/users/UsersComponents";
import PostsComponents from "./components/posts/PostsComponents";
import {getAllPostsOfUser} from "./services/dummyjson.api.service";
import {PostModel} from "./models/postModel/PostModel";


const App = () => {

    const [posts, setPosts] = useState<PostModel[]>([]);

    const lift =(userId:number)=>{
        getAllPostsOfUser(userId).then(({data})=>{
            console.log(data)
        })
    }

  return (
      <div>

          <div> <UsersComponents lift={lift}/> </div>
          <div> <PostsComponents posts={posts}/> </div>

      </div>
  );
};

export default App;
