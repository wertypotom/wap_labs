import { useEffect, useState } from 'react'
import { useBookContext } from './BookContext'
import { NavLink, useNavigate, useParams } from 'react-router'

export const EditBookForm = () => {
  const { loading, error, fetchBookById } = useBookContext()
  const [editedBook, setEditedBook] = useState({
    title: '',
    author: '',
  })
  let params = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetchBookById(params.id).then((fetchedBook) => {
      if (fetchedBook) {
        setEditedBook(fetchedBook)
      } else {
        alert('Book not found')
        navigate('/')
      }
    })
  }, [])

  const { updateBook } = useBookContext()

  const handleSubmit = () => {
    if (!editedBook.title || !editedBook.author) {
      alert('Please fill in all fields')
      return
    }
    updateBook(editedBook)
    navigate('/')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }))
  }

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: {error}</h3>

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
        <h4>Edit Book</h4>
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
