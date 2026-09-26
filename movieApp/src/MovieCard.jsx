import { LuSparkle } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

function MovieCard({
  movie,
  isLiked,
  onLike,
  onDelete,
}) {
  return (
    <div
      className="card"
      style={{ width: "350px" }}
    >
      <img src={movie.image} className="card-img-top" alt={movie.title} style={{height: "100%", objectFit: "cover",}}
        onError={(e) => {e.currentTarget.src ="https://placehold.co/500x750/cccccc/999999?text=No+Image";}}/>

      <div className="card-body">
        <h5 className="card-title text-center">
          {movie.title}
        </h5>

        <div className="mb-3">
          <span className="badge bg-secondary">
            {movie.category}
          </span>
        </div>

        <div className="d-flex justify-content-between">
          <button
            className={
              isLiked
                ? "btn btn-danger btn-sm"
                : "btn btn-outline-danger btn-sm"
            }
            onClick={() => onLike(movie.id)}
          >
            <LuSparkle /> Recommend
          </button>

          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => onDelete(movie.id)}
          >
            <FaRegTrashAlt /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;