import { useState } from 'react'
import { useBookContext } from './BookContext'
import { Modal } from './Modal'
import { EditBookForm } from './EditBookForm'

export const Book = ({ book }) => {
  const [open, setOpen] = useState(false)
  const { deleteBook } = useBookContext()

  const handleClose = () => {
    setOpen(false)
  }

  const handleEdit = () => {
    setOpen(true)
  }

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
      }}
    >
      <Modal isOpen={open} onClose={handleClose}>
        <EditBookForm book={book} />
      </Modal>

      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      </div>
    </div>
  )
}
