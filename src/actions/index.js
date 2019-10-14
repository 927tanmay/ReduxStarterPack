import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const URL = "http://reduxblog.herokuapp.com/api";
const key = "?key=tan123";
export function fetchPosts(){


    const request = axios.get(`${URL}/posts${key}`);
    return{
        type: FETCH_POSTS,
        payload: request
    };
}


export function createPost(values,callback){
    const request = axios.post(`${URL}/posts${key}`,values).then(()=>callback());

    return{
        type:CREATE_POST ,
        payload: request
    };
}

export function fetchPost(id){
    const request=axios.get(`${URL}/posts/${id}${key}`);

    return{
        type:FETCH_POST,
        payload:request
    };
}


export function deletePost(id,callback){
    const request = axios.delete(`${URL}/posts/${id}${key}`).then(()=>callback());

    return{
        type:DELETE_POST,
        payload:id
    };
}