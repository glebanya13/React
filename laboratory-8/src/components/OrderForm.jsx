import { useState } from "react";

const ProductsPage = ({ products, onQuantityChange, onRemoveFromCart }) => (
    <div>
        <h2>Product List</h2>
        {products.map((product) => (
            <div key={product.id}>
                <input
                    type="checkbox"
                    onChange={() => onRemoveFromCart(product.id)}
                />
                <span>{product.name}</span>
                <input
                    type="number"
                    min="1"
                    max={product.quantity}
                    value={product.quantityInCart}
                    onChange={(e) => onQuantityChange(product.id, e.target.value)}
                />
                <button onClick={() => onRemoveFromCart(product.id)}>
                    Remove from Cart
                </button>
            </div>
        ))}
    </div>
);

const ShippingPaymentPage = ({
    selectedShipping,
    setSelectedShipping,
    address,
    setAddress,
    selectedPayment,
    setSelectedPayment,
}) => (
    <div>
        <h2>Shipping and Payment</h2>
        <div>
            <label>
                <input
                    type="radio"
                    value="courier"
                    checked={selectedShipping === "courier"}
                    onChange={() => setSelectedShipping("courier")}
                />
                Courier
            </label>
            {selectedShipping === "courier" && (
                <div>
                    <p>Delivery cost: {200 - (200 < 200 ? 10 : 0)} rubles</p>
                </div>
            )}
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    value="mail"
                    checked={selectedShipping === "mail"}
                    onChange={() => setSelectedShipping("mail")}
                />
                Mail
            </label>
            {selectedShipping === "mail" && (
                <div>
                    <p>Cost: 5 rubles per kilogram</p>
                </div>
            )}
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    value="pickup"
                    checked={selectedShipping === "pickup"}
                    onChange={() => setSelectedShipping("pickup")}
                />
                Pickup
            </label>
        </div>
        <div>
            <label>
                Address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={selectedShipping === "pickup"}
                />
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    value="cash"
                    checked={selectedPayment === "cash"}
                    onChange={() => setSelectedPayment("cash")}
                />
                Cash
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    value="card"
                    checked={selectedPayment === "card"}
                    onChange={() => setSelectedPayment("card")}
                />
                Card
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    value="bankTransfer"
                    checked={selectedPayment === "bankTransfer"}
                    onChange={() => setSelectedPayment("bankTransfer")}
                />
                Bank Transfer
            </label>
        </div>
    </div>
);

const OrderForm = () => {
    const initialProducts = [
        { id: 1, name: "Product A", quantity: 50, quantityInCart: 1 },
        { id: 2, name: "Product B", quantity: 30, quantityInCart: 2 },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedShipping, setSelectedShipping] = useState("courier");
    const [address, setAddress] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("cash");
    const [cartProducts, setCartProducts] = useState(initialProducts);

    const handleQuantityChange = (productId, newQuantity) => {
        setCartProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, quantityInCart: parseInt(newQuantity, 10) }
                    : product
            )
        );
    };

    const handleRemoveFromCart = (productId) => {
        setCartProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    };

    const handleNextPage = () => {
        if (currentPage < 2) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div>
            {currentPage === 1 ? (
                <ProductsPage
                    products={cartProducts}
                    onQuantityChange={handleQuantityChange}
                    onRemoveFromCart={handleRemoveFromCart}
                />
            ) : (
                <ShippingPaymentPage
                    selectedShipping={selectedShipping}
                    setSelectedShipping={setSelectedShipping}
                    address={address}
                    setAddress={setAddress}
                    selectedPayment={selectedPayment}
                    setSelectedPayment={setSelectedPayment}
                />
            )}
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <button onClick={handleNextPage} disabled={currentPage === 2}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default OrderForm;
