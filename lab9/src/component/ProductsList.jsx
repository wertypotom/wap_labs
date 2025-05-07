import React, { useState } from 'react'
import { Product } from './Product'

const initialData = [
  { id: 1, name: 'Apple', price: 1, inStock: true },
  { id: 2, name: 'Banana', price: 1, inStock: false },
  { id: 3, name: 'Cherry', price: 2, inStock: true },
]

export const ProductsList = () => {
  const [data, setData] = useState(initialData)

  const handleInStockChange = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, inStock: !item.inStock } : item
    )
    setData(updatedData)
  }

  return (
    <div>
      {data.map((item) => (
        <Product key={item.id} {...item} changeInStock={handleInStockChange} />
      ))}
    </div>
  )
}
