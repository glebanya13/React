import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoForm({ onAddItem }) {
    const name = useRef('');

    const add = (e) => {
        e.preventDefault();

        if (name.current.value) {
            const item = {
                id: uuidv4(), // new Date()
                name: name.current.value,
                checked: false
            };
    
            onAddItem(item);
            name.current.value = '';
        } else {
            alert('Ошибка!');
        }
    };

    return (
        <>
            <form onSubmit={add}>
                <label htmlFor="name">Название:</label>
                <input type="text" id="name" ref={name} />

                <button type="submit">Добавить</button>
            </form>
        </>
    );
}
