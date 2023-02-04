import React from "react"
import { useContext } from "react"
import { TaskContext } from "../../context"
import ItemTask from "./ItemTask"

import './ListTask.scss'

const ListTask = () =>{
    const {tasks} = useContext(TaskContext)

    
    let taskList = tasks?.map(({message, favorite, completed, id}) => <ItemTask key={id} message={message} favorite={favorite} completed={completed} id={id}/>)

    return(
        <div className="list-wrapper">
            <ul className="list-tasks">
                {taskList}
            </ul>
        </div>
    )

}

export default ListTask