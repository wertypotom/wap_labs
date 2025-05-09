import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { BookProvider } from './BookContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AddBookForm } from './AddBookForm.jsx'
import { EditBookForm } from './EditBookForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='add' element={<AddBookForm />} />
          <Route path='edit/:id' element={<EditBookForm />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  </StrictMode>
)
