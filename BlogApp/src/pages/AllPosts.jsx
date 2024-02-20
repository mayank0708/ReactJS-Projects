import {React, useState, useEffect} from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config"

function AllPosts(){
    const [posts, setPost] = useState([]); 
    useEffect(()=> {}, [])
    appwriteService.getPost([]).then((posts) => {
        if(posts){
            setPost(posts.documents)
        }
    })

    return(
        <div className="py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key = {post.$id} className="p-2 w-1/4">
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts