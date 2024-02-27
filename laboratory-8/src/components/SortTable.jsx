const SortTable = ({ sortedProducts, handleSort }) => {

    return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th onClick={() => handleSort("name")}>Наименование</th>
                    <th onClick={() => handleSort("price")}>Стоимость</th>
                    <th onClick={() => handleSort("quantity")}>Количество</th>
                    <th>Изображение</th>
                    <th onClick={() => handleSort("description")}>Описание</th>
                    <th onClick={() => handleSort("isNew")}>Новинка</th>
                    <th onClick={() => handleSort("discount")}>Скидка</th>
                </tr>
            </thead>
            <tbody>
                {sortedProducts.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                            <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
                        </td>
                        <td>{product.description}</td>
                        <td>{product.isNew ? "Да" : "Нет"}</td>
                        <td>{product.discount}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    marginBottom: "20px",
};

export default SortTable;
