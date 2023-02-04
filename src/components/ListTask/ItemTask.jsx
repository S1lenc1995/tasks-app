import {useContext, useState, useRef, useCallback} from "react";
import cx from 'classnames';
import { TaskContext } from "../../context";
import Checkbox from "../Checkbox";

import {ReactComponent as FavoriteLogo} from "./images/favorite.svg"
import {ReactComponent as MessageLogo} from "./images/message.svg"
import {ReactComponent as RemoveLogo} from "./images/remove.svg"

import './ListTask.scss'

const ItemTask = ({message, favorite, completed, id}) =>{
    const [edit, setEdit] = useState(true)
    const [currentMessage, setCurrentMessage] = useState(message)
    const inputRef = useRef()
    const {toggleTaskCompleted, toggleTaskFavorite, deleteTask,  updateTask } = useContext(TaskContext)
    const isNotEdit = !edit

    const handlerEdit =()=>{
        setEdit(!edit)
        updateTask(id, currentMessage)
    }

    const handlerKeyDown = useCallback ((e) =>{
        if(e.key === 'Enter'){
            handlerEdit()
        }

    }, [currentMessage]);

    return(
        <li className={cx('list-todo', {'completed-todo':completed},{'edit': isNotEdit}, {'favorite-todo':favorite})}>
            
            <Checkbox onClick={()=>toggleTaskCompleted(id)} checked={completed}>
            <input ref={inputRef} disabled={edit} onKeyDown={handlerKeyDown} maxLength={50} type="text" value={currentMessage} onChange={() => setCurrentMessage(inputRef.current.value)} />
            </Checkbox>
            <div className="list-actions">
                <button type="button" disabled={completed} className="btn-action" onClick={()=> toggleTaskFavorite(id)}><FavoriteLogo className={cx("svg-icon icon-favorite",{active:favorite})} /></button>
                <button type="button" disabled={completed} className="btn-action" onClick={handlerEdit} >  <MessageLogo  className="svg-icon"/></button>
                <button type="button" disabled={completed} className="btn-action" onClick={()=> deleteTask(id)}><RemoveLogo  className="svg-icon"/></button>
            </div>
        </li>
    )
}

export default ItemTask