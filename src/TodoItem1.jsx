import { MdDelete } from "react-icons/md";
function TodoItem1({name,date,deleteitem}){
  return(
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          {name}
        </div>
        <div className="col-4">
          {date}
        </div>
        <div className="col-2">
          <button onClick={()=>deleteitem(name)} type="button" className="btn btn-danger"><MdDelete /></button>
        </div>
      </div>
    </div>
  )
}
export default TodoItem1;