import React from 'react';
import './App.css';
import Head from './components/Head'
import List from './components/List'
import Foot from './components/Foot'


export default class App extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Head/>
          <List/>
          <Foot/>
        </div>
      </div>
    );
  }
};

