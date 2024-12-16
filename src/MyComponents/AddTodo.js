import React, { useState } from 'react'

export const AddTodo = (addTodo) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description cannot be blanck")
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
    <div className='container'>
        <div>Add a Todo</div>
        <form onSubmit={submit}>
        <div className="mb-3">
            <label to="title" className="form-label">Todo Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder=""/>
        </div>
        <div className="mb-3">
            <label to="desc" className="form-label">Description</label>
            <input type='text' className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" rows="3"></input>
        </div>
        <button type='submit' className="btn btn-sm btn-success">Add Todo</button>    
        </form>
   </div>
    )
}
