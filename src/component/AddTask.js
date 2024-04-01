import React, { useState } from 'react'
import './AddTask.css'
export default function AddTask({tasks,setTask}) {
console.log('THIS IS PROPS')
// console.log(t)
const[task,setnewTask]=useState('')
// const[]
function newTask(event){
    setnewTask(event.target.value)
}
function cleartask(event){
    setnewTask('')

}
function addTask(e){
  e.preventDefault();
  const createTask={
    id:Math.floor(Math.random()*100),
    name:task,
    complete:false
  }
  // setTask()
  setTask([...tasks,createTask])

}

  return (
    <div className='addTask'>
        <form>
            <label htmlFor='t'>Task</label>
            <input type='text' name='t' id='t' onChange={newTask} value={task}/>
            <button className='btn addtask' onClick={addTask}>Add Task</button>
            <span className='btn cleartask' onClick={cleartask}>Clear</span>
        </form>

    <p>{task}</p>
    </div>
  )
}
