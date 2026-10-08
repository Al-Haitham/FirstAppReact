import { TbSparkles2Filled } from "react-icons/tb";
import { TbSparkles2 } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";

function MovieCard({
  movie,
  isLiked,
  dispatch,
}) {

  return (
    <div
      className="card"
      style={{ width: "350px" }}
    >

      <img
        src={movie.image}
        className="card-img-top"
        alt={movie.title}
        style={{
          height: "100%",
          objectFit: "cover",
        }}
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/500x750/cccccc/999999?text=No+Image";
        }}
      />

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
            onClick={() =>
              dispatch({
                type: "TOGGLE_LIKE",
                payload: movie.id,
              })
            }
          >
            {isLiked ? (
              <>
                <TbSparkles2Filled /> Recommended
              </>
            ) : (
              <>
                <TbSparkles2 /> Recommend
              </>
            )}
          </button>

          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() =>
              dispatch({
                type: "DELETE_MOVIE",
                payload: movie.id,
              })
            }
          >
            <FaRegTrashAlt /> Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default MovieCard;