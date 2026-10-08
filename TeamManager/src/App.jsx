import { useEffect, useReducer, useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaMinusCircle, FaPlus, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { BsPersonFillAdd } from "react-icons/bs";



const API_URL = "http://localhost:3000/players";

const initialState = {
  players: [],
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_PLAYERS":
      return {
        ...state,
        players: action.payload,
        loading: false,
      };

    case "ADD_PLAYER":
      return {
        ...state,
        players: [...state.players, action.payload],
      };

    case "UPDATE_SCORE":
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload.id
            ? { ...player, score: action.payload.score }
            : player
        ),
      };

    case "DELETE_PLAYER":
      return {
        ...state,
        players: state.players.filter(
          (player) => player.id !== action.payload
        ),
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_PLAYERS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SET_ERROR",
          payload: error.message,
        });
      });
  }, []);


  function addPlayer(e) {
    e.preventDefault();

    if (name === "" || score === "") {
      return;
    }

    const newPlayer = {
      name: name,
      score: Number(score),
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "ADD_PLAYER",
          payload: data,
        });

        setName("");
        setScore("");
      })
      .catch((error) => {
        dispatch({
          type: "SET_ERROR",
          payload: error.message,
        });
      });
  }


  function changeScore(player, amount) {
    const newScore = player.score + amount;

    fetch(`${API_URL}/${player.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: newScore,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "UPDATE_SCORE",
          payload: {
            id: player.id,
            score: newScore,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "SET_ERROR",
          payload: error.message,
        });
      });
  }


  function deletePlayer(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "DELETE_PLAYER",
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SET_ERROR",
          payload: error.message,
        });
      });
  }

  return (
    <div style={styles.container}>
      <h1><RiTeamFill /> Gestion des joueurs</h1>

      {state.error && (
        <p style={styles.error}>
          {state.error}
        </p>
      )}

      <div style={styles.form}>
        <h2>Ajouter un joueur</h2>

        <form onSubmit={addPlayer}>
          <input
            type="text"
            placeholder="Nom du joueur"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.addButton}>
            <BsPersonFillAdd /> Ajouter
          </button>
        </form>
      </div>

      <p style={styles.count}>
        Nombre de joueurs : {state.players.length}
      </p>

      <div style={styles.list}>
        <h2>Liste des joueurs</h2>

        {state.loading ? (
          <p>Chargement...</p>
        ) : state.players.length === 0 ? (
          <p>Aucun joueur</p>
        ) : (
          state.players.map((player) => (
            <div key={player.id} style={styles.player}>
              <span style={styles.name}>
                {player.name}
              </span>

              <span>
                Score : {player.score}
              </span>

              <button
                onClick={() => changeScore(player, 1)}
                style={styles.plus}
              >
                <FaPlusCircle />
              </button>

              <button
                onClick={() => changeScore(player, -1)}
                style={styles.minus}
              >
                <FaMinusCircle />
              </button>

              <button
                onClick={() => deletePlayer(player.id)}
                style={styles.delete}
              >
                <TiDelete /> Supprimer
              </button>
            </div>a
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial",
  },

  form: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "20px",
    borderRadius: "20px",
  },

  input: {
    padding: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    borderRadius: "50px",
  },

  addButton: {
    padding: "10px 15px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "50px",

  },

  count: {
    padding: "10px",
    background: "#e3f2fd",
    textAlign: "center",
    borderRadius: "50px",
  },

  list: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },

  player: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 0",
    borderBottom: "1px solid #ddd",
  },

  name: {
    flex: 1,
    fontWeight: "bold",
  },

  plus: {
    background: "blue",
    color: "white",
    border: "none",
    padding: "7px 10px",
    borderRadius: "50px",
  },

  minus: {
    background: "blue",
    opacity: 0.3,
    color: "white",
    border: "none",
    padding: "7px 9px",
    borderRadius: "50px",
  },

  delete: {
    background: "red",
    color: "white",
    border: "none",
    padding: "7px 10px",
    borderRadius: "50px",
  },

  error: {
    color: "red",
  },
};

export default App;