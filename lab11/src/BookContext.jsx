import React, { createContext, useContext, useState, useEffect } from 'react'

export const BookContext = createContext(null)

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchBooks() {
    try {
      const response = await fetch(
        'https://67d17ef590e0670699ba5929.mockapi.io/books'
      )
      if (!response.ok) throw new Error('Failed to fetch books')
      const data = await response.json()
      setBooks(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function fetchBookById(id) {
    try {
      const response = await fetch(
        `https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`
      )
      if (!response.ok) throw new Error('Failed to fetch books')
      const data = await response.json()
      return data
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const addBook = async (book) => {
    const { title, author } = book
    const id = Math.floor(Math.random() * 10000)
    const newBook = { id, title, author }

    try {
      const response = await fetch(
        'https://67d17ef590e0670699ba5929.mockapi.io/books',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBook),
        }
      )

      if (!response.ok) throw new Error('Failed to add book')
      const data = await response.json()
      setBooks([...books, data])
    } catch (err) {
      setError(err.message)
    }
  }

  const updateBook = async (book) => {
    const { id, title, author } = book
    const updatedBook = { id, title, author }

    try {
      const response = await fetch(
        `https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedBook),
        }
      )

      if (!response.ok) throw new Error('Failed to update book')
      const data = await response.json()
      setBooks(books.map((book) => (book.id === id ? data : book)))
    } catch (err) {
      setError(err.message)
    }
  }

  const deleteBook = async (id) => {
    try {
      const response = await fetch(
        `https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`,
        {
          method: 'DELETE',
        }
      )
      if (!response.ok) throw new Error('Failed to delete book')
      setBooks(books.filter((book) => book.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        deleteBook,
        loading,
        error,
        fetchBookById,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => useContext(BookContext)
