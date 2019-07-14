import React from 'react';
import './App.css';
import Head from './components/Head'
import List from './components/List'
import Foot from './components/Foot'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      todos:[
        {id:1, title: "看一小时React的课程", finished:false},
        {id:2, title: "看一小时Java的课程", finished:false},
        {id:3, title: "看一小时Python的课程", finished:false},
        {id:4, title: "看一小时TensorFlow的课程", finished:false}
      ],
      finishedCount:0
    }

    this.delTodoItem = this.delTodoItem.bind(this);
    this.delSelectedItems = this.delSelectedItems.bind(this);
  }

  render() {
    const {todos, finishedCount} = this.state;
    return (
      <div class="todo-container">
        <div class="todo-wrap">
          <Head addTodoItem={this.addTodoItem}/>
          <List todos={todos} delTodoItem={this.delTodoItem} changeTodoFinished={this.changeTodoFinished}/>
          <Foot finishedCount={finishedCount} totalCount={todos.length} delSelectedItems={this.delSelectedItems}/>
        </div>
      </div>
    );
  }

  // _delTodoItem = (todoId) => {
  //   let tempTodos = this.state.todos;
  //   tempTodos = tempTodos.filter(todo => { return todo.id !== todoId});
  //   this.setState({
  //     todos: tempTodos
  //   })
  // }
  delTodoItem(todoId) {
    let tempTodos = this.state.todos;
    let finishedCount = 0;
    tempTodos = tempTodos.filter(todo => { return todo.id !== todoId});

    tempTodos.forEach((todo, index) => {
      if(todo.finished) finishedCount++;
    })

    this.setState({
      todos: tempTodos,
      finishedCount: finishedCount
    })
  }

  changeTodoFinished = (todoId) => {
    let tempTodos = this.state.todos;
    let finishedCount = 0;
    tempTodos.forEach((todo, index) => {
      if(todo.id === todoId) {
        todo.finished = todo.finished ? false: true
      }

      if(todo.finished) finishedCount++;
    })
    
    this.setState({
      todos: tempTodos,
      finishedCount: finishedCount
    })
  }

  delSelectedItems() {
    let tempTodos = this.state.todos;
    let finishedCount = 0;
    tempTodos = tempTodos.filter(todo => { return !todo.finished});
    tempTodos.forEach((todo, index) => {
      if(todo.finished) finishedCount++;
    })

    this.setState({
      todos: tempTodos,
      finishedCount: finishedCount
    })
  }

  addTodoItem = (title) => {
    let maxId = 0;
    let tempTodos = this.state.todos;
    tempTodos.forEach((todo, index) => {
      if(todo.id > maxId) maxId = todo.id;
    })
    maxId++;
    tempTodos.push({id:maxId, title:title, finished:false})
    this.setState({
      todos: tempTodos
    })
  }

};

