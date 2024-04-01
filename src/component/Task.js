import React from 'react'
import { useState } from 'react'
import '../App.css'
// import AddTask from './AddTask'
export default function Task({tasks,setTask}) {
  

  
    function taskDelete(id){
      setTask(tasks.filter((t)=>t.id!=id))
    }
    const [show,setShow]=useState(true)
    function showhide(){
      setShow(!show)
    }
    

  return(
    <div className="App">
    
    <h1>Task-list 
      <button className='btn' onClick={showhide}>SHOW/ HIDE</button></h1>
    
    <ul>
    {show && tasks.map((task)=>
    <li key={task.id}>{task.id}------------{task.name}
      <button onClick={()=>taskDelete(task.id)} className='btn deletebtn'>DELETE</button>
    
    </li>)}
    </ul>
    </div>
  )

}





  // const[count,setCount]=useState(10);


  // function add(){
  //   setCount(count+1)
  // }
  // // function sub(){
  // //   count-=1;
  // //   console.log(count); 
  // // }
  // return (
  //   <div>
  //   <h1>Total number: {count}</h1>
  //   <button onClick={add}>ADD</button>
  //   </div>
    
  // )
// }
