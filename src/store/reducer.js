import {DEL_ITEM_BY_ID, CHG_TODO_FINISHED, DEL_SELECTED_ITEM, ADD_TODO_ITEM} from './actionTypes';

const defaultState = {
    todos:[
        {id:1, title: "看一小时React的课程", finished:false},
        {id:2, title: "打一小时台球", finished:false},
        {id:3, title: "看一小时Python的课程", finished:false},
        {id:4, title: "看一小时TensorFlow的课程", finished:false}
    ],
    finishedCount:0
}

export default (state=defaultState, action) => {
    console.log(state, action);

    let newState = JSON.parse(JSON.stringify(state));
    if(action.type === DEL_ITEM_BY_ID) {
        let finishedCount = 0;
        newState.todos = newState.todos.filter(todo => { return todo.id !== action.todoId});

        newState.todos.forEach((todo, index) => {
            if(todo.finished) finishedCount++;
        })
        
        newState.finishedCount = finishedCount;
        return newState;
    } else if(action.type === CHG_TODO_FINISHED) {
        let finishedCount = 0;
        newState.todos.forEach((todo, index) => {
            if(todo.id === action.todoId) {
                todo.finished = todo.finished ? false: true
            }

            if(todo.finished) finishedCount++;
        })
        newState.finishedCount = finishedCount;
        return newState;
    } else if(action.type === DEL_SELECTED_ITEM) {
        let finishedCount = 0;
        newState.todos = newState.todos.filter(todo => { return !todo.finished});
        newState.todos.forEach((todo, index) => {
            if(todo.finished) finishedCount++;
        })
        newState.finishedCount = finishedCount;
        return newState;
    } else if(action.type === ADD_TODO_ITEM) {
        let maxId = 0;

        newState.todos.forEach((todo, index) => {
            if(todo.id > maxId) maxId = todo.id;
        })
        maxId++;
        newState.todos.push({id:maxId, title:action.title, finished:false})
        return newState; 
    }
    return state;
}