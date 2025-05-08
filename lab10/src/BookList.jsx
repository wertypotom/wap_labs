import { useState } from 'react'
import { Book } from './Book'
import { useBookContext } from './BookContext'
import { Modal } from './Modal'
import { AddBookForm } from './AddBookForm'

export const BookList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { books, loading, error } = useBookContext()

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleAddBook = () => {
    setIsModalOpen(true)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (books.length === 0) return <div>No books available</div>

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <AddBookForm />
      </Modal>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 10px',
        }}
      >
        <h2>Book List</h2>
        <button
          style={{
            height: '50px',
          }}
          onClick={handleAddBook}
        >
          Add book
        </button>
      </div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  )
}
