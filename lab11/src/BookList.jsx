import { Book } from './Book'
import { useBookContext } from './BookContext'
import { NavLink } from 'react-router'

export const BookList = () => {
  const { books, loading, error } = useBookContext()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (books.length === 0) return <div>No books available</div>

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 10px',
        }}
      >
        <h2>Book List</h2>
        <NavLink to='/add'>
          <button
            style={{
              height: '50px',
            }}
          >
            Add book
          </button>
        </NavLink>
      </div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  )
}
