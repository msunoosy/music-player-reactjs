import React, { useContext } from "react";
import playerContext from "../../context/playerContext";
function Graphics() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <div>
      <div className="graphics">
        <img alt="graphic" src={songs[currentSong][3]}></img>
      </div>
    </div>
  );
}

export default Graphics;
