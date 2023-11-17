import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoAPP from './todoList/TodoApp';
import CounterApp from './counterApp/counterApp';
import UserProfileCard from './useProfileCard/UserProfileCard';
import EventHandlingApp from './EventHandlingApp/EventHandlingApp';
import FormComponent from './ControlledComponentForm/FormComponent';
import ContactForm from './ContactFormValidation/ContactForm';
import SimpleRouting from './RouterExercises/SimpleRouting';
import SimpleWebApplication from './RouterExercises/SimpleWebApplication';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoAPP />
    <CounterApp />
    <UserProfileCard name ="John" age = "30" email="john25@gamil.com"/>
    ===Event Handling===
    <EventHandlingApp/><br/>
    <br></br>==Form Component===<br/>
    <FormComponent/>
    === form Validation ===
    <ContactForm/>
    === Routing ===
    <SimpleRouting/>
    === Page not found routing===
    <SimpleWebApplication/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
