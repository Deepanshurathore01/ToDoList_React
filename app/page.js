"use client"
import { Changa } from 'next/font/google';
import React, { useState } from 'react'

const page = () => {
  const [title,settitle] = useState("");
  const [decs,setdecs] = useState("");
  const [mainTask,setmainTask] = useState([]);
  

  const submitHandler =(e)=>{
    e.preventDefault();
    setmainTask([...mainTask,{title,decs}]);
    settitle("");
    setdecs("");
    console.log(mainTask);
  }

  const deleteHandler =(i) => {
    let copTask =[...mainTask]
    copTask.splice(i,1)
    setmainTask(copTask);
  }



   let renderTask =<h2>No Task Available</h2>

    if(mainTask.length > 0 ){
   renderTask = mainTask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between'>
       <div className='flex  items-center justify-between mb-8 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-semibold'>{t.decs}</h6>
    </div>
    <button onClick={() =>{
      deleteHandler(i)
    }}
    
    className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
   });
  }

  return (
    <>
    <h1 className='bg-black text-white p-5 text-4xl font-bold text-center'>Deepansh's TodoList</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-4 border-zinc-800 m-5 px-4 py-2' placeholder='Enter title here' value={title} onChange={(e)=>{
        settitle(e.target.value);
      }}
      />

      <input type="text" className='text-2xl border-4 border-zinc-800 m-5 px-4 py-2' placeholder='Enter description here' value={decs} onChange={(e)=>{
        setdecs(e.target.value);
      }}/>

      <button className='bg-black text-white font-bold px-4 py-3 m-5 text-2xl rounded'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    
    </>
  )
}

export default page
