import React from 'react';
import PropTypes from 'prop-types';

class Foot extends React.Component {
  
  static propTypes = {
    finishedCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    delSelectedItems: PropTypes.func.isRequired
  }


  render() {
    const {finishedCount,totalCount,delSelectedItems} = this.props;
    return (
      <div class="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>已完成{finishedCount}件</span> / 总计{totalCount}件
        </span>
        <button class="btn btn-warning" onClick={()=>delSelectedItems()}>清除已完成任务</button>
      </div> 
    );
  }
}
 
export default Foot;