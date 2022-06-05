import { useEffect, useState } from "react";
import MyInputForm from "../components/inputForm/MyInputForm";
import MyModal from "../components/modal/MyModal";
import ToDoList from "../components/toDoList/ToDoList";
import getInfo from "../API/getInfo";

const Home = () => {
    
    const [visible, setVisible] = useState(false);
    const [toDo, setToDo] = useState([]);
    function saveLocale (key, value) {
        localStorage.setItem(key, value);
        }   
    function loadAllLocale() {
        const output = []
        for (let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            const buff = {[localStorage.key(i)]:localStorage.getItem(key)};
            output.push(buff);
        ;}
        setToDo(output)
    }
    const addToDo = (item, checked) => {
        setToDo([...toDo, {[item]: checked}]);
    }
    const deleteToDo = (text) => {
        localStorage.removeItem(text);
        setToDo(toDo.filter(itemText => {
            return Object.keys(itemText)[0] !== text}));
    }
    async function loadFake () {
        const test = await getInfo(5);
        test.map(value => saveLocale(value.title, value.completed));
        loadAllLocale();
    }
    useEffect(() => {loadAllLocale()}, [])
    return (
            <main>
                <h1 className="title">ToDo List</h1>
                <div className="btn__wrapper">
                <button className="btn" onClick={() => setVisible(!visible)}>Добавить дело</button>
                <button className="btn" onClick={() => loadFake()}>Загрузить шаблоны</button>
                </div>
                <MyModal children={<MyInputForm setVisible={setVisible} add={addToDo} save={saveLocale}/>} visible={visible} setVisible={setVisible}/>
            <ToDoList children={toDo} remove={deleteToDo} save={saveLocale}/>
            </main>
    );
};

export default Home;