import { useContext, useRef, useState } from "react"
import PostListProvider, { PostList } from "../store/post-list-store";
import Alert from "./Alert";

export default function Form() {

    const userId = useRef("");
    const postTitle = useRef("");
    const postBody = useRef("");
    const tags = useRef("");
    const likes = Math.floor(Math.random()*1000 + 1);
    const views = Math.floor(Math.random()*7000 + 1);
    const dislikes = Math.floor(Math.random()*100 + 1);
    const reactions= {
        likes: likes,
        dislikes: dislikes
    };

    const {addPost} = useContext(PostList);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('New post has been added')
        const uid = userId.current.value;
        const title = postTitle.current.value;
        const body = postBody.current.value;
        const tags2 = tags.current.value.trim().split(' ');
        addPost(uid , title , body , tags2 , reactions , views); 
        userId.current.value = "";
        postTitle.current.value = "";
        postBody.current.value = "";
        tags.current.value = "";
    }

    return (

        <main className="w-full  flex flex-col items-center m-auto  sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                  
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create a Post</h3>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Your User-Id
                            </label>
                            <input
                                ref={userId}
                                placeholder="User-1"
                                id="userid"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Title
                            </label>
                            <input
                                ref={postTitle}
                                placeholder="Title of Post"
                                id="title"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Body
                            </label>
                            <textarea
                                ref={postBody}
                                rows = "2"
                                placeholder="Tell us more about post"
                                id="body"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Hashtags
                            </label>
                            <input
                                ref={tags}
                                placeholder="mood fellings chill"
                                id="hashtags"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        
                        <button 
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Create Post
                        </button>
                    </form>
     
                    
                </div>
            </div>
        </main>
    )
}