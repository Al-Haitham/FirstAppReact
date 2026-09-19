import Post from "./Post";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Posts</h1>

      <Post
        title="Mon premier post"
        description="Bienvenue sur mon application React !"
      />
    </main>
  );
}

export default App;