import React from 'react';
import Product from './Product';

function ProductList({ products }) {
  return (
    <div>
      <div
        className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
      >
        {products.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            category={item.category}
            pic={'https://cdn2.mageplaza.com/media/general/OnWj0is.png'}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;