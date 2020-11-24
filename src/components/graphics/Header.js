import React, { useContext } from "react";
import playerContext from "../../context/playerContext";

function Header() {
  const { currentSong, songs } = useContext(playerContext);
  return (
    <div className="headercontrols">
      <header>
        <div>
          <span style={{ color: "red" }}>Now Playing </span>{" "}
          <span style={{ fontWeight: "bold" }}>{songs[currentSong][0]} </span>
          <span>by {songs[currentSong][2]}</span>
        </div>
        {songs[currentSong + 1] != undefined ? (
          <div>
            <span>Next Song : </span> <span>{songs[currentSong + 1][0]} </span>
            <span>by {songs[currentSong + 1][2]}</span>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Header;
