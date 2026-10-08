import { useEffect, useReducer } from "react";
import MovieList from "./MovieList";

const initialState = {
  movies: [],
  search: "",
  category: "Tous",
  likedMovies: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    case "TOGGLE_LIKE":
      return {
        ...state,
        likedMovies: state.likedMovies.includes(action.payload)
          ? state.likedMovies.filter(
              (movieId) => movieId !== action.payload
            )
          : [...state.likedMovies, action.payload],
      };

    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { movies, search, category, likedMovies } = state;

  const categories = [
    "Tous",
    ...new Set(movies.map((movie) => movie.category)),
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        dispatch({
          type: "SET_MOVIES",
          payload: response.data,
        });
      });
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Tous" || movie.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container mt-4">

      <h1 className="text-center">
        Collection de films
      </h1>

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
          onChange={(event) =>
            dispatch({
              type: "SET_SEARCH",
              payload: event.target.value,
            })
          }
        />
      </div>

      {/* Categories */}
      <div className="border rounded p-3 mb-4">

        <h5>Filtrer par catégorie</h5>

        {categories.map((categoryName) => (
          <div
            className="form-check form-check-inline"
            key={categoryName}
          >
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value={categoryName}
              checked={category === categoryName}
              onChange={(event) =>
                dispatch({
                  type: "SET_CATEGORY",
                  payload: event.target.value,
                })
              }
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
        dispatch={dispatch}
      />

    </div>
  );
}

export default App;