import { useState } from "react"
import "../../css/todo.css"

export function InputTodo() {
  const [listData, setListData] = useState([])

  const [objData , setObjData] = useState({
    todo : "" ,
    date : null,
    status : "pending",
    desc : ""
  })


  function inputHandler(event) {
    const { value, name } = event.target;
  //{date : "2022-12-09" , status : " " , 
  // desc : "makan ayam goreng" , todo : "makan ayam"}

    setObjData({
      ...objData,
      [name]: value,
    });
  }

  function addTodoItem() {
    if(!objData.todo || !objData.desc || !objData.date) return alert("please fill the data")
    else if(listData[listData.length-1]?.todo === objData.todo) return alert("you already add this todo")
  
    //list data = [ {date : "2022-12-09" , status : " " , 
  // desc : "makan ayam goreng" , todo : "makan ayam"} ] 

    setListData([...listData,objData])
  }



return (
    <>
    <div className="todo-list">
        <div> <h1> ToDo List </h1> <hr/>  
        
    </div>
          <div className="content-list">
{
  listData?.map((val,idx) => {
    return (
  <>
  <TodoCard data={val} idx={idx} /> 
     </>
    )
  })
}
            
</div>
      </div>
      <div className="todo-add">
        <input name="todo" className="input-todo" type={"text"} placeholder="Title"  onChange={inputHandler}></input>
        <input name="date" className="input-todo" type={"datetime-local"} onChange={inputHandler}></input>
        <textarea name="desc" className="input-todo" placeholder="description" onChange={inputHandler}></textarea>
        <button className="button-add"  onClick={addTodoItem}>Add </button>
    </div>
    </>
  
)

}


export function TodoCard(props) {

  const [status,setStatus] = useState(false)

  return ( 
    <> 
    {
      status ? 
      <div className="content-done" key={props.idx}>
      <div> Title : {props.data.todo} </div>
      <div> Date : {props.data.date}</div>
      <div> Desc : {props.data.desc}</div>
      <div style={{ textAlign: "center", marginTop:"20px" }}> <button className="button-done" onClick={()=> setStatus(!status)}>Done</button>  </div>
     </div>
      :
      <div className="content" key={props.idx}>
      <div> Title : {props.data.todo} </div>
      <div> Date : {props.data.date}</div>
      <div> Desc : {props.data.desc}</div>
      <div style={{ textAlign: "center", marginTop:"20px" }}> <button className="button-ongoing" onClick={()=> setStatus(!status)}>On Going</button>  </div>
     </div>

    }
   
   </>

  )
}