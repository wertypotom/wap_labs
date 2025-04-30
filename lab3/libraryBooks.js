let libraryBooks = [
  { title: 'The Road Ahead', author: 'Bill Gates', ID: 1235 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', ID: 4268 },
  { title: 'The Road Ahead', author: 'Bill Gates', ID: 4268 },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    ID: 3257,
  },
]

const findBooks = (keyword) => {
  const foundBooks = libraryBooks
    .filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => a.ID - b.ID)

  return foundBooks
}

const getTitles = () => {
  const titles = libraryBooks
    .map((book) => book.title)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

  return titles
}

const addBook = (title, author, ID) => {
  const foundBook = libraryBooks.find((book) => book.ID === ID)

  if (foundBook) return null

  const newBook = {
    title,
    author,
    ID,
  }

  libraryBooks.push(newBook)

  return newBook
}
