import { useState } from 'react'
import { useBookContext } from './BookContext'
import { NavLink, useNavigate } from 'react-router'

export const AddBookForm = () => {
  const { addBook } = useBookContext()
  let navigate = useNavigate()
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
    navigate('/')
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <h4>Add Book</h4>
        <NavLink to='/'>
          <button>Return back</button>
        </NavLink>
      </div>
      <form
        action={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
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
        <button
          style={{
            height: '50px',
            marginTop: '10px',
          }}
          type='submit'
        >
          Add
        </button>
      </form>
    </>
  )
}
