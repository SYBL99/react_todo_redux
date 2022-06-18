import ToDoItem from "../toDo/toDo";
import { useSelector } from "react-redux";

const ToDoList = ({remove, save}) => {
    const children = useSelector((state) => state.setToDo.value)
    return (
        <div className="todo__list">
            {children.map(toDo => {let entries = Object.entries(toDo)
                return <ToDoItem text={entries[0][0]} key={entries[0][0]} save={save}
                remove={() => remove(entries[0][0])} checked={entries[0][1]}/>})}
        </div>
    );
};

export default ToDoList;