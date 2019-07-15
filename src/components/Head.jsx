import React from 'react';
import store from '../store';
import {getAddTodoItemAction} from '../store/actionCreators';

class Head extends React.Component { 
  constructor(props) {
    super(props);
    this.todoInputRef = React.createRef();
  }

  render() {
    return (
        <div className="todo-header">
            <input ref={this.todoInputRef} type="text" placeholder="请输入今天的任务清单，按回车键确认" onKeyUp={(e)=>this.addTodoItem(e)}/>
        </div>
    );
  }

  addTodoItem(e) {
    if(e.keyCode === 13) {
      let curVal = this.todoInputRef.current.value;
      if(curVal === "") {
        alert("input is null");
        return;
      }
      const action = getAddTodoItemAction(curVal);
      store.dispatch(action);
      this.todoInputRef.current.value = "";
    }
  }


}
 
export default Head;