import { useState } from 'react'
import { useBookContext } from './BookContext'

export const AddBookForm = () => {
  const { addBook } = useBookContext()
  const [book, setBook] = useState({
    title: '',
    author: '',
  })

  const handleSubmit = () => {
    if (!book.title || !book.author) {
      alert('Please fill in all fields')
      return
    }
    addBook(book)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }))
  }

  return (
    <>
      <h4>Add Book</h4>
      <form action={handleSubmit}>
        <label htmlFor='title'>Book title</label>
        <input
          id='title'
          type='text'
          name='title'
          value={book.title}
          onChange={handleChange}
        />
        <label htmlFor='author'>Book author</label>
        <input
          id='author'
          type='text'
          name='author'
          value={book.author}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}
