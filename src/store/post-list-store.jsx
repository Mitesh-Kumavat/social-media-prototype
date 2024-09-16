import { createContext, useEffect, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter((post) => post.id !== action.payload.id);
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currentPostList]
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostlist] = useReducer(
        postListReducer,
        DEFAULT_POST_LIST
    );

    const addPost = (userId, title, body, tags, reactions) => {
        dispatchPostlist({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title,
                body,
                reactions,
                userId,
                tags
            }
        })
    };

    const deletePost = (id) => {
        dispatchPostlist({
            type: 'DELETE_POST',
            payload: {
                id,
            }
        })
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }} >
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [

]

export default PostListProvider;
