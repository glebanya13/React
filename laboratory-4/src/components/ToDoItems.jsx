export default function ToDoItems({ item, onCheckboxChange }) {
    const { id, name, checked } = item;

    const handleCheckboxChange = () => {
        onCheckboxChange(item);
    };

    return (
        <tr>
            <td>{name}</td>
            <td>
                <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
            </td>
        </tr>
    );
}