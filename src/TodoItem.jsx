import TodoItem1 from "./TodoItem1";
const TodoItem=({item,deleteitem})=>{
  return(
    <div className="items-container">
      {item.map(item => <TodoItem1 name={item.name} date={item.date}deleteitem={deleteitem} key={item.name}></TodoItem1>
         )}
      
      
      </div>

    );
}
export default TodoItem;