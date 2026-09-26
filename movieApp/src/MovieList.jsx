import MovieCard from "./MovieCard";

function MovieList({
  movies,
  likedMovies,
  onLike,
  onDelete,
}) {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div
          className="col-md-4 mb-4"
          key={movie.id}
        >
          <MovieCard
            movie={movie}
            isLiked={likedMovies.includes(movie.id)}
            onLike={onLike}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;