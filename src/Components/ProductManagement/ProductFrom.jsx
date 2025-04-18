import React, { useState } from 'react';

const ProductFrom = ({handleAddProduct}) => {
    const [error,setError] = useState("");
    const handleSubmit =(e) =>{
        e.preventDefault();

        const name=e.target.name.value;
        const price =e.target.price.value;
        const quantity=e.target.quantity.value;

        const newProduct={
            name,
            price,
            quantity
        }

        if (name.length ===0) {
            setError("please set a product name");
            return;
        }
        else if(price.length ===0){
            setError("please provide a price");
            return;
        }
        else if(price < 0){
            setError("price can not be negative");
            return;
        }
        else if(quantity < 0){
            setError("quantity can not be negative")
            return;
        }
        else if(quantity.length ===0){
            setError("Please add Quantity")
            return;
        }

        else {
            
        }

        handleAddProduct(newProduct)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name' /><br />
                <input type="number" name="price" placeholder='Product price' /><br />
                <input type="number" name="quantity" placeholder='Product Quantity' /><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:"red"}}>{error}</p>
        </div>
    );
};

export default ProductFrom;