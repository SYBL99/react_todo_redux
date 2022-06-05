import { useState } from 'react';
import cl from './toDo.module.css'

const TodoItem = ({ text, remove, checked, save}) => {
    const [check, setCheck] = useState(checked === "true" ? true : false);
    return (
        <div className={cl.todo__item}>
            <input className={cl.checkbox} type='checkbox' checked={check} 
                onChange={() => { setCheck(!check); save(text, !check)}}></input>
            <label className={cl.label}>{text}</label>
            <div className={cl.clBtn} onClick={remove}></div>
        </div>
    );
};

export default TodoItem;