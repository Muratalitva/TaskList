import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

const App = () => {
  return (
    <div>
      <TaskList />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
