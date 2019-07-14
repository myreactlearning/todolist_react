import React from 'react';
import PropTypes from 'prop-types'
import Item from './Item'

class List extends React.Component { 
  static propTypes = {
    todos: PropTypes.array.isRequired,
    delTodoItem: PropTypes.func.isRequired,
    changeTodoFinished: PropTypes.func.isRequired
  }

  render() {
    const {todos,delTodoItem,changeTodoFinished} = this.props;
    return (
      <ul class="todo-main">
        {
          todos.map((todo, index) => {
            return <Item key={index} todo={todo} delTodoItem={delTodoItem} changeTodoFinished={changeTodoFinished}/>
          })
        }
      </ul>
    );
  }
}
 
export default List;