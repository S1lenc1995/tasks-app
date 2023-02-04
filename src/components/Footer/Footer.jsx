import { useContext, useState } from "react";
import Checkbox from "../Checkbox";
import { TaskContext } from "../../context";
import './Foter.scss'


const Foter=()=>{
    const { completeAll, completed} = useContext(TaskContext)
    console.log(completed)
    
    return(
        <footer className="all-completed">
        <Checkbox onClick={completeAll} checked={completed} >
            <p >All tasks completed</p>    
        </Checkbox>
        </footer>
      
      
    )
}

export default Foter