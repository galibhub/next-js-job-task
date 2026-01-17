import React from 'react';
import product from "@/data/product.json";
import ProductCard from '../card/ProductCard';

const Products = () => {
    return (
         <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>

       <div className="grid md:grid-cols-3 gap-5">
        {product.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
    );
};

export default Products;




