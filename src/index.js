import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoAPP from './todoList/TodoApp';
import CounterApp from './counterApp/counterApp';
import UserProfileCard from './useProfileCard/UserProfileCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoAPP />
    <CounterApp />
    <UserProfileCard name ="John" age="30" email="john25@gamil.com"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
