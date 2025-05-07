import React, { useReducer } from 'react'
import { ProductWithReducer } from './ProductWithReducer'

const initialData = [
  { id: 1, name: 'Apple', price: 1, inStock: true },
  { id: 2, name: 'Banana', price: 1, inStock: false },
  { id: 3, name: 'Cherry', price: 2, inStock: true },
]

function reducer(state, action) {
  if (action.type === 'handleInStock') {
    return state.map((item) =>
      item.id === action.id ? { ...item, inStock: !item.inStock } : item
    )
  }
}

export const ProductListWithReducer = () => {
  const [data, dispatch] = useReducer(reducer, initialData)

  const handleInStockChange = (id) => {
    dispatch({ type: 'handleInStock', id })
  }

  return (
    <div>
      {data.map((item) => (
        <ProductWithReducer
          key={item.id}
          {...item}
          changeInStock={handleInStockChange}
        />
      ))}
    </div>
  )
}
