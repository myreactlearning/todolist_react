import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import {getDelSelectedItemAction} from '../store/actionCreators';

class Foot extends React.Component {
  constructor(props) {
    super(props);

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.state = store.getState();
    
    store.subscribe(this.handleStoreChange);
  }

  

  render() {
    const {finishedCount, todos} = this.state;
    const totalCount = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>已完成{finishedCount}件</span> / 总计{totalCount}件
        </span>
        <button className="btn btn-warning" onClick={this._delSelectedItems}>清除已完成任务</button>
      </div> 
    );
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  _delSelectedItems() {
    const action = getDelSelectedItemAction();
    store.dispatch(action);
  }
}
 
export default Foot;