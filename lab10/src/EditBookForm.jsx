import { useState } from 'react'
import { useBookContext } from './BookContext'

export const EditBookForm = ({ book }) => {
  const [editedBook, setEditedBook] = useState(book)
  const { updateBook } = useBookContext()

  const handleSubmit = () => {
    if (!editedBook.title || !editedBook.author) {
      alert('Please fill in all fields')
      return
    }
    updateBook(editedBook)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }))
  }

  return (
    <>
      <h4>Edit Book</h4>
      <form action={handleSubmit}>
        <label htmlFor='title'>Book title</label>
        <input
          id='title'
          type='text'
          name='title'
          value={editedBook.title}
          onChange={handleChange}
        />
        <label htmlFor='author'>Book author</label>
        <input
          id='author'
          type='text'
          name='author'
          value={editedBook.author}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
