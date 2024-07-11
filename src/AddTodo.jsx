import { useRef} from "react";
import { BiBookAdd } from "react-icons/bi";

function AddTodo({ additem}){
  // const [todoname,setTodoName]=useState("");
  // const [tododate,setTodoDate]=useState("");
  
  // useRef
  const todoNameElement=useRef();
  const todoDateElement=useRef();
  
  // const handleName=(event)=>{
  //   setTodoName(event.target.value);
  //   useofUpdate.current+=1;
  // }
  // const handleDate=(event)=>{
  // setTodoDate(event.target.value);
  //   console.log(`no of updates are ${useofUpdate.current}`);
  // }
  
  const addButtonClicked=(event)=>{
    event.preventDefault();
    const todoname=todoNameElement.current.value;
    const tododate=todoDateElement.current.value;
    todoNameElement.current.value="";
    todoDateElement.current.value="";
    additem(todoname,tododate);
    // setTodoName("");
    // setTodoDate("");
    
  }
return(
  <div className="container text-center">
    <form className="row">
      <div className="col-4">
        <input type="text" ref={todoNameElement}  placeholder="Enter Todo Here" ></input>
      </div>
      <div className="col-4">
     <input type="date" ref={todoDateElement}  ></input>
      </div>
      <div className="col-2">
        <button onClick={addButtonClicked} type="button" className="btn btn-primary"><BiBookAdd /></button>
      </div>
    </form>
  </div>
)  
}
export default AddTodo;