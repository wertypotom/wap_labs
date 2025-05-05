class Exercise3 {
  #movies = new Map()

  add_genre(genre) {
    if (this.#movies.has(genre)) {
      return false
    }

    this.#movies.set(genre, [])

    return true
  }

  add_movie_in_genre(genre, new_movie) {
    // check if genre exists
    if (!this.#movies.has(genre)) {
      return false
    }

    // check if movie id exists
    if (this.#movies.get(genre).some((movie) => movie.id === new_movie.id)) {
      return false
    }

    // add movie
    this.#movies.get(genre).push(new_movie)

    return true
  }

  update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    // check if genre exists
    if (!this.#movies.has(genre)) {
      return false
    }

    // check if movie id exists
    const movies = this.#movies.get(genre)
    const movieIndex = movies.findIndex((movie) => movie.id === movie_id)
    if (movieIndex === -1) {
      return false
    }

    // update movie title
    movies[movieIndex].title = new_title
    this.#movies.set(genre, movies)

    return true
  }

  delete_movie_by_genre_and_movie_id(genre, movie_id) {
    // check if genre exists
    if (!this.#movies.has(genre)) {
      return false
    }

    // check if movie id exists
    const movies = this.#movies.get(genre)
    const movieIndex = movies.findIndex((movie) => movie.id === movie_id)
    if (movieIndex === -1) {
      return false
    }

    // delete movie
    movies.splice(movieIndex, 1)
    this.#movies.set(genre, movies)

    return true
  }

  get_movie_title_by_id(genre, movie_id) {
    // check if genre exists
    if (!this.#movies.has(genre)) {
      return false
    }

    // check if movie id exists
    const movies = this.#movies.get(genre)

    const movie = movies.find((movie) => movie.id === movie_id)

    if (movie) {
      return movie.title
    }

    return ''
  }
}
const exercise3 = new Exercise3()
exercise3.add_genre('thriller')
exercise3.add_genre('action')
exercise3.add_genre('comedy')

exercise3.add_movie_in_genre('thriller', { id: '1', title: 'The American' })
exercise3.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' })
exercise3.add_movie_in_genre('action', { id: '3', title: 'The Dark Knight' })
exercise3.add_movie_in_genre('action', { id: '4', title: 'Inception' })
exercise3.add_movie_in_genre('comedy', { id: '5', title: 'The Hangover' })
exercise3.add_movie_in_genre('comedy', { id: '6', title: 'Superbad' })
exercise3.add_movie_in_genre('comedy', { id: '7', title: 'Step Brothers' })

exercise3.get_movie_title_by_id('thriller', '1')
exercise3.get_movie_title_by_id('thriller', '2')
