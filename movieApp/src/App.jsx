import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import axios from "axios"

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [likedMovies, setLikedMovies] = useState([]);
  const categories = ["Tous", ...new Set(movies.map((movie)=> movie.category))];

  useEffect(() => {
    axios.get("http://localhost:3000/movies")
      .then(response =>(
      .setMovies(data)
      .console.log(error))  ;
  }, []);

  function handleLike(id) {
    if (likedMovies.includes(id)) {
      setLikedMovies(
        likedMovies.filter((movieId) => movieId !== id)
      );
    } else {
      setLikedMovies([...likedMovies, id]);
    }
  }

  function handleDelete(id) {
    setMovies(
      movies.filter((movie) => movie.id !== id)
    );
  }

  const filteredMovies = movies.filter((movie) => {
    const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "Tous" || movie.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center">Collection de films</h1>

      <p className="text-center text-muted">
        Recherchez et filtrez vos films préférés
      </p>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher un film..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="border rounded p-3 mb-4">
        <h5>Filtrer par catégorie</h5>

        {
          categories.map((categoryName)=>
          (<div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value={categoryName}
              checked={category === categoryName}
              onChange={(event) => setCategory(event.target.value)}
            />
            <label className="form-check-label">
              {categoryName}
            </label>
          </div>
        ))}
      </div>
        
    
      {/* Movies header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Films</h3>

        <span className="badge bg-primary">
          {filteredMovies.length} film(s)
        </span>
      </div>

      {/* Movie list */}
      <MovieList
        movies={filteredMovies}
        likedMovies={likedMovies}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;