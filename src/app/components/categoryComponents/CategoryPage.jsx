"use client"
import CategoryHeader from './CategoryHeader'
import CategoryBody from './CategoryBody'
import { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryPage = () => {
    const [products,setProducts] = useState([]);
    const fetchProducts = async () =>{
        try {
            const response = await axios.get('https://dummyjson.com/products');
            //showing the first 8 products
            const first8Products = response.data.products.slice(0, 8);
            setProducts(first8Products);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetchProducts();
    },[])

  return (
    <>
        <CategoryHeader products={products} setProducts={setProducts}/>
        <CategoryBody products={products}/>
    </>
  )
}

export default CategoryPage
