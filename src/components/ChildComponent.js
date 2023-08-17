import React ,{useState} from "react";



const ChildComponent = ({todos,setTaskId})=>{
// const [todoId,setTodoId]= useState("")
// console.log(todoId);
    return(
        <div>
        <ul>
        <h1>Child Component</h1>
           {
           
             todos.map((todo) =>(
           
                  <li> {todo.text}
                    <button onClick={()=>setTaskId(todo.id)}>Complete</button>
                   </li>
         
                ))
       
           }
               </ul>

        {/* {
            todos.map((todo) => (
                    <ul key={todo.id}>
                    <li>{todo.text} <button>Complete</button></li>
                
                    </ul>
                ))
            } */}
        </div>
    )
}
export default ChildComponent