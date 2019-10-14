import {FETCH_POSTS,FETCH_POST, DELETE_POST} from '../actions/index';
import _ from 'lodash';

export default function(state={},action){
    
    switch(action.type){

    case FETCH_POST:
    const post= action.payload.data;
    const newState={...state};
    newState[post.id]=post;
    return newState;    

    case DELETE_POST:
    return _.omit(state,action.payload); //returns a new state with the state whose id has been passed as deleted    


    case FETCH_POSTS:
    console.log('Action received',action);    
    return _.mapKeys(action.payload.data,"id"); //this creates object of the array with key=id
    default:
    return state;
    }
}