import AppName from "./AppName.jsx";
import AddTodo from "./AddTodo.jsx";
import TodoItem from "./TodoItem.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import "./App.css";
import { useState } from "react";
function App() {
  let [todoitem, setTodoItem] = useState([]);

  const addNewItem = (itemname, itemdate) => {
    //  console.log(`new item is ${itemname} date is ${itemdate}`);
    const additem = [...todoitem, { name: itemname, date: itemdate }];
    setTodoItem(additem);
  };

  const onDeleteHandle = (todoitemname) => {
    const newtodoitems = todoitem.filter((item) => item.name !== todoitemname);
    setTodoItem(newtodoitems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo additem={addNewItem} />
      {todoitem.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItem item={todoitem} deleteitem={onDeleteHandle} />
    </center>
  );
}
export default App;
