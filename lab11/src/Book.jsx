import { useState } from 'react'
import { useBookContext } from './BookContext'
import { NavLink } from 'react-router'

export const Book = ({ book }) => {
  const [setOpen] = useState(false)
  const { deleteBook, loading, error } = useBookContext()

  const handleEdit = () => {
    setOpen(true)
  }

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: {error}</h3>

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
      }}
    >
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <NavLink to={`/edit/${book.id}`}>
          <button onClick={handleEdit}>Edit</button>
        </NavLink>
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      </div>
    </div>
  )
}
