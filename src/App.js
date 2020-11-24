import Header from "./components/graphics/Header";
import Graphics from "./components/graphics/Graphics";
import Playlist from "./components/playlist/Playlist";
import Controls from "./components/Control";
import PlayerState from "./context/playerState";
import "./App.css";
import "./index";

function App() {
  return (
    <PlayerState>
      <div className="main">
        <div className="top">
          <div className="left">
            <Header />
            <Graphics />
          </div>
          <div className="right">
            <Playlist />
          </div>
        </div>
        <Controls />
      </div>
    </PlayerState>
  );
}

export default App;
