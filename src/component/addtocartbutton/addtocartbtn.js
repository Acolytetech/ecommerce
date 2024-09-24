import React, { useState } from 'react';
import './AddToCartButton.css'; // Make sure to include your CSS file here

const AddToCartButton = () => {
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        setAdded(!added);
        // Optional: Add any additional functionality here (e.g., adding item to cart)
    };

    return (
        <button
            className={`add-to-cart ${added ? 'added' : ''}`}
            onClick={handleClick}
        >
            <div className="default">Add to cart</div>
            <div className="success">Added</div>
            <div className="cart">
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="dots"></div>
        </button>
    );
};

export default AddToCartButton;
