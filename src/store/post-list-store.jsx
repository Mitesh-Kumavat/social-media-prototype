import { createContext, useEffect, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => {},
    addPosts: () => {}
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter((post) => post.id !== action.payload.id);
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currentPostList]
    } else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    }
    return newPostList;
};

    const PostListProvider = ({ children }) => {
    const [postList, dispatchPostlist] = useReducer(
        postListReducer,
        []
    );

    const addPost = (userId, title, body, tags, reactions , views) => {
        dispatchPostlist({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title,
                body,
                reactions,
                userId,
                tags,
                views
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

    const addPosts = (posts) => {
        dispatchPostlist({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts,
            }
        })
    };


    return (
        <PostList.Provider value={{ postList, addPost, deletePost, addPosts}} >
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
