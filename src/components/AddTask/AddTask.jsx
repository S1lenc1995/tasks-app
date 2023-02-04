import React from 'react'
import { useContext, useRef, useState } from 'react'
import { TaskContext } from '../../context'
import api from '../../api'

import './AddTask.scss'


const AddTask= () =>{
    const inputRef = useRef()
    const {addTask} = useContext(TaskContext)
    const [value, setValue] = useState('')

    const handlerAddTodo = async (e) =>{
        e.preventDefault();
        if(value.length ===0){
            return null
        }

        const taskObj = await api.createTask(value)
        addTask(taskObj)
        setValue('');
    

    }

    const handlerUpdate =(e)=>{
        setValue(e.target.value)
    }
    return(
        <div className='addTask'>
            <form className='form' onSubmit={ handlerAddTodo}>
                <input type="text"
                placeholder="Enter task"
                className='task-massage'
                maxLength={50}
                value={value}
                onChange={handlerUpdate}
                 />
                  <button className='task-send' type="submit">Add Task</button>
            </form>
           
        </div>
    )
}

export default AddTask