import Header from "./component/Header";
import Footer from "./component/Footer";
import React from 'react'
import Task from "./component/Task";
import AddTask from "./component/AddTask";
import { useState } from "react";


export default function App() {
  const [tasks,setTask]=useState([
    {id:1,name:"THIS IS TASK 1",complete:true},
    {id:2,name:"THIS IS TASK 2",complete:false},
    {id:3,name:"THIS IS TASK 3",complete:true},
  ])

  return (
    <div>
      <Header/>
      <AddTask setTask={setTask} tasks={tasks}/>
      <Task setTask={setTask} tasks={tasks} />
      <Footer/>
    </div>
  )
}
