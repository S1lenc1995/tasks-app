import {useMemo, useContext} from 'react'
import { TaskContext } from '../../context'
import { handlerCountCompleted } from '../../helpers'

const Header = () => {
    const {tasks} = useContext(TaskContext)
    
    const counter = useMemo(()=>{
       return handlerCountCompleted(tasks)
    }, [tasks])
  

    return (
        <header>
            <h1>Tasks Manager</h1>
            <p>Percentage of uncompleted tasks {counter} %</p>
        </header>

    )

}

export default Header