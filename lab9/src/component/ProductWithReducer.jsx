import React from 'react'

export const ProductWithReducer = ({
  id,
  name,
  price,
  inStock,
  changeInStock,
}) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2
        style={{
          color: inStock ? 'green' : 'red',
        }}
      >
        {name}
      </h2>
      <p>Price: ${price}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => changeInStock(id)}>
        {inStock ? 'Remove from stock' : 'Add to stock'}
      </button>
    </div>
  )
}
