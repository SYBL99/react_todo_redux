import ToDoItem from "../toDo/toDo";

const ToDoList = ({children, remove, save}) => {
    return (
        <div className="todo__list">
            {children.map(toDo => {let entries = Object.entries(toDo)
                return <ToDoItem text={entries[0][0]} key={entries[0][0]} save={save}
                remove={() => remove(entries[0][0])} checked={entries[0][1]}/>})}
        </div>
    );
};

export default ToDoList;