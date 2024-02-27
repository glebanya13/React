import { useState } from "react";

const Search = ({ catalog }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchType, setSearchType] = useState("exact");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearch = () => {
        const results = catalog.filter((product) => {
            const searchTermLower = searchTerm.toLowerCase();

            const values = Object.values(product);

            return values.some((value) => {
                const lowerCasedValue = value.toString().toLowerCase();

                if (searchType === "exact") {
                    return lowerCasedValue === searchTermLower;
                } else {
                    return lowerCasedValue.includes(searchTermLower);
                }
            });
        });

        setSearchResults(results);
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Product Search</h2>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter product name"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <select value={searchType} onChange={handleSearchTypeChange}>
                    <option value="exact">Exact Match</option>
                    <option value="partial">Partial Match</option>
                </select>
                <button onClick={handleSearch}>Search</button>
            </div>

            {searchResults.length > 0 ? (
                <div>
                    <h3>Search Results:</h3>
                    {searchResults.map((product) => (
                        <div key={product.id} style={resultStyle}>
                            <h4>{product.name}</h4>
                            <p>Quantity: {product.quantity}</p>
                            <p>Price: ${product.price}</p>
                            {product.discount && (
                                <p>Discounted Price: ${((100 - product.discount) / 100) * product.price}</p>
                            )}
                            <p>Description: {product.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

const resultStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    margin: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default Search;
