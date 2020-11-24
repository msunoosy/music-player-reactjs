import React, { useState, useRef, useContext } from "react";
import playerContext from "../context/playerContext";

function Controls() {
  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    playing,
    togglePlaying,
    handleEnd,
  } = useContext(playerContext);

  const audio = useRef("audio_tag");

  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  return (
    <div className="controls">
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        preload="true"
        src={songs[currentSong][1]}
      />
      <div className="musicControls">
        <span className="prev" onClick={prevSong}>
          Prev
        </span>

        <span
          className="play"
          onClick={() => {
            togglePlaying();
            toggleAudio();
          }}
        >
          <span className={!playing ? "" : "hide"}>Play</span>
          <span className={!playing ? "hide" : ""}>Pause</span>
        </span>
        <span className="next" onClick={nextSong}>
          Forward
        </span>
      </div>
      <div className="progressb">
        <span className="currentT">{fmtMSS(currentTime)}</span>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
        <span className="totalT">{fmtMSS(dur)}</span>
      </div>
    </div>
  );
}

export default Controls;
