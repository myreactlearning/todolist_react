
import {DEL_ITEM_BY_ID, CHG_TODO_FINISHED, DEL_SELECTED_ITEM, ADD_TODO_ITEM} from './actionTypes';

export const getDelItemByTodoIdAction = (todoId)=>({
    type: DEL_ITEM_BY_ID,
    todoId: todoId
});

export const getChangeTodoFinishedAction = (todoId)=>({
    type: CHG_TODO_FINISHED,
    todoId: todoId
});

export const getDelSelectedItemAction = ()=>({
    type: DEL_SELECTED_ITEM
});

export const getAddTodoItemAction = (title)=>({
    type: ADD_TODO_ITEM,
    title
})

