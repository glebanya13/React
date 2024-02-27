import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItems from "./ToDoItems";

export default function ToDoList() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all");

    const handleAddItem = (item) => {
        setItems(prevItems => [...prevItems, item]);
    };

    const onCheckboxChange = (clickedItem) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === clickedItem.id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const filteredItems = items.filter(item => {
        if (filter === "completed") {
            return item.checked;
        } else if (filter === "uncompleted") {
            return !item.checked;
        }
        return true;
    });

    return (
        <>
            <ToDoForm onAddItem={handleAddItem} />

            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
                <button onClick={() => setFilter("uncompleted")}>Uncompleted</button>
            </div>

            <table>
                <tbody>
                    {filteredItems.map((item) => (
                        <ToDoItems key={item.id} item={item} onCheckboxChange={() => onCheckboxChange(item)} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
