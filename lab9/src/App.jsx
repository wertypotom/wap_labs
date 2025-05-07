import './App.css'
import { ProductsList } from './component/ProductsList'
import { ProductListWithReducer } from './component/ProductListWithReducer'

function App() {
  return (
    <>
      <h3>Product List</h3>
      <ProductsList />
      <h3>Product List with Reducer</h3>
      <ProductListWithReducer />
    </>
  )
}

export default App
