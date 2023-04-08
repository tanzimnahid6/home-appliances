import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProdutcs from './SingleProdutcs';

const Shop = () => {
    const produtcs = useLoaderData()
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3  place-items-center gap-10 p-12">
        {produtcs.map((product) => (
          <SingleProdutcs key={product.id} product={product}></SingleProdutcs>
        ))}
      </div>
    );
};

export default Shop;