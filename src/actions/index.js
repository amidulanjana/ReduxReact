import axios from 'axios';

export const FETCH_POSTS='FETCH_POSTS';
export const CREATE_POSTS='CREATE_POSTS';
export const SHOW_POST='SHOW_POST';

const URL=`http://reduxblog.herokuapp.com/api/`
const API_KEY='?key=Amila1234'

export function fetchPosts(){
    
    const request=axios.get(`${URL}/posts${API_KEY}`);

    return {
        type:FETCH_POSTS,
        payload:request
    }

}

export function createPosts(values,callback){

const request = axios
    .post(`${URL}/posts${API_KEY}`, values)
    .then(() => callback());

    return{
        type:CREATE_POSTS,
        payload:request
    }

}


export function showPost(id){

    const request=axios
        .get(`${URL}/posts/${id}${API_KEY}`);
    
    return{
        type:SHOW_POST,
        payload:request
    }

}