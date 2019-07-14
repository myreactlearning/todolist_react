import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component { 
  constructor(props) {
      super(props);

      this.state = {
        showDelBtn: false
      }
  }

  static propTypes = {
    todo: PropTypes.object.isRequired,
    delTodoItem: PropTypes.func.isRequired,
    changeTodoFinished: PropTypes.func.isRequired
  }

  render() {
    const {todo} = this.props
    const {showDelBtn} = this.state  
    return (
        <li 
            onMouseOver={()=>this._hasShowBtn(true)}
            onMouseOut={()=>this._hasShowBtn(false)}
        >   
        <label>
          <input type="checkbox" checked={todo.finished?true:false} onChange={()=>this.changeTodoFinished(todo.id)} />
          <span>{todo.title}</span>
        </label>
        <button class="btn btn-warning" style={{display: showDelBtn?'block':'none'}}
            onClick={()=>this.delTodoItem(todo.id)}>删除</button>
      </li>
    );
  }

  _hasShowBtn(flag) {
    this.setState({
        showDelBtn: flag
    })
  } 

  delTodoItem(todoId) {
      this.props.delTodoItem(todoId);
  }

  changeTodoFinished(todoId) {
      this.props.changeTodoFinished(todoId);
  }


}
 
export default Item;