import React from 'react';
import PropTypes from 'prop-types';

class Head extends React.Component { 
  constructor(props) {
    super(props);
    this.todoInputRef = React.createRef();
  }

  static propTypes = {
    addTodoItem: PropTypes.func.isRequired,
  }


  render() {
    return (
        <div class="todo-header">
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
      this.props.addTodoItem(curVal);
      this.todoInputRef.current.value = "";
    }
  }


}
 
export default Head;