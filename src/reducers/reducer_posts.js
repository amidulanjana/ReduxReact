import {FETCH_POSTS, SHOW_POST } from '../actions/';
import _ from 'lodash';

export default function(state={},action){

    switch(action.type){
        case FETCH_POSTS :
            return _.mapKeys(action.payload.data,'id');
        case SHOW_POST:
            return {...state,[action.payload.data.id]:action.payload.data}
        default:
            return state;
    }

}