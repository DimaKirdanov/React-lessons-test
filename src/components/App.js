// import MainMenu from './MainMenu/MainMenu';
// import menuItems from '../data/menuItems.json';
// import ToggleButton from './ToggleButton/ToggleButton';
// import Counter from './Counter/Counter';
import React, {Component} from "react";
import ToDoList from "./ToDoList"

 class App extends Component {
  state = {
    todos: [
      {
        id: "id-1",
        text: "Make HW 1-st module HTML/CSS",
        completed: false,
      }, 
      {
        id: "id-2",
        text: "Make HW 1-st module JS",
        completed: false,
      }, 
      {
        id: "id-3",
        text: "Make HW 1-st module react",
        completed: false,
      }, 
    ],
   };
  deleteTodo =  todoId  => {
    this.setState(prevState =>
    ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
   }
   render() { 
     const { todos } = this.state;
    return (
      <>
        <h1> Tittle</h1>
        <ToDoList todos={todos} onDeleteToDo={this.deleteTodo } />
          {/* <MainMenu items={menuItems} />
      <ToggleButton text="Click me" type="button" />
      <Counter /> */}
      </>
    )
  }
}


export default App;