Two ways to define method

let's say if we need to define method _delTodoItemById(todoId)


1) 
_delTodoItemById = (todoId) => {}

2)
constructor(props){
    this._delTodoItemById = this._delTodoItemById.bind(this);
}

_delTodoItemById() {
    this.state/////
}