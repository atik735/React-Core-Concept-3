import React, { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products,setProducts]=useState([])
    const handleAddProduct =(newProduct) =>{
        setProducts([...products,newProduct])        
    }
    // console.log(products);
    
    return (
        <div>
            <h3>Product managment product table product form</h3>
            <ProductFrom handleAddProduct={handleAddProduct}></ProductFrom>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;