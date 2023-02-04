import { createContext, useState } from "react";
import api from '../api'
import { sortTaskByGroup } from "../helpers";

export const TaskContext = createContext({})

const TaskProvider = ({children}) =>{
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('yourTasks')) || []);
    const [completed, setCompleted] = useState( JSON.parse(localStorage.getItem('mainCheckBoxCompleted')) || false);

    const addTask = (value) => {
        setTasks((prev) =>sortTaskByGroup([...prev, value]))
        localStorage.setItem('yourTasks', JSON.stringify([value, ...tasks]));
        
    }
    const updateTask = (id, message) =>{
        const taskUpdate = tasks.map((item)=>{
            if(id === item.id){
                item.message = message
            }
            return item
        })
        setTasks(sortTaskByGroup(taskUpdate))
        localStorage.setItem('yourTasks', JSON.stringify(sortTaskByGroup(taskUpdate)));
    }


    const toggleTaskCompleted = (id) =>{
        const taskCompleted = tasks.map((item)=>{
            if(id === item.id){
                item.completed = !item.completed
            }
            return item
        })
        setTasks(sortTaskByGroup(taskCompleted))
        localStorage.setItem('yourTasks', JSON.stringify(sortTaskByGroup(taskCompleted)));
    }


    const toggleTaskFavorite = (id) =>{
        const taskFavorite = tasks.map((item)=>{
            if(id === item.id){
                item.favorite = !item.favorite
            }
            return item
        })
        setTasks(sortTaskByGroup(taskFavorite))
          localStorage.setItem('yourTasks', JSON.stringify(sortTaskByGroup(taskFavorite)));
    }

    const deleteTask = async (id) =>{
        const isRemove = await api.removeTask(id)
        if(isRemove){
            const newTasks = tasks.filter(todo => todo.id !== id)
            setTasks(newTasks)
             localStorage.setItem('yourTasks', JSON.stringify(newTasks));
        }
    }

    const completeAll = ()=>{
        setCompleted(!completed)
        localStorage.setItem('mainCheckBoxCompleted', `${!completed}`);
        const finishAll = tasks.map((el)=>{
            completed?  el.completed = false : el.completed = true
            return el 
        })
        setTasks(sortTaskByGroup(finishAll))
        localStorage.setItem('yourTasks', JSON.stringify(sortTaskByGroup(finishAll)));
    }


    return(
        <TaskContext.Provider value={{tasks, completed,  addTask, toggleTaskCompleted, toggleTaskFavorite, deleteTask,  updateTask, completeAll}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;