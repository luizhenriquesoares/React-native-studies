import { combineReducers } from 'redux';

export const ADD_POST = 'ADD_POST';

const data = (state = {}) => {
    return state;
};
export const reddit = (state = [
    {name: 'demo'},
    {name: 'hello'}
], action) => {
    switch (action.type) {
      case ADD_POST:
        return [
            ...state,
            action.payload,
        ];
        default:
            return state;
    }
};


export const reducers = combineReducers({reddit, data})