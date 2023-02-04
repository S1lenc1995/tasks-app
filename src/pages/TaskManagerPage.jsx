import React from "react";
import './TaskManagerPage.scss'

const TaskManagerPage = ({children}) => {

    return(
        <div className="main-page">
            <div className="main-page__wraper">
                {children}
            </div>
        </div>
    )
}

export default TaskManagerPage


