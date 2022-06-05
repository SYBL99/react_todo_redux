import React, { useState } from "react";

const MyInputForm = ({setVisible, add, save}) => {
    const [labelText, setLabelText] = useState('')
    const addToDo = (e) => {
        e.preventDefault();
        add(labelText, false);
        save(labelText, false)
        setVisible(false);
        setLabelText('');
    }
    return (
        <>
            <form className="form">
                <p>Новая заметка</p>
                <input className="form__input" placeholder={'Текст заметки'} 
                    onChange={e => setLabelText(e.target.value)} value={labelText}/>
                <button className="form__btn" onClick={addToDo}>Добавить дело</button>
            </form>
        </>
    );
};

export default MyInputForm;