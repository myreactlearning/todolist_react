import React from 'react';
import Item from './Item'
import store from '../store';

class List extends React.Component { 
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() {
    const {todos} = this.state;
    return (
      <ul className="todo-main">
        {
          todos.map((todo, index) => {
            return <Item key={index} todo={todo}/>
          })
        }
      </ul>
    );
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

}
 
export default List;