import React, { useReducer } from "react";
import playerContext from "./playerContext";
import playerReducer from "./playerReducer";
import { songsArr } from "./songs";

import { SET_CURRENT_SONG, TOGGLE_PLAYING } from "./types";

const PlayerState = (props) => {
  const initialState = {
    currentSong: 0,
    songs: songsArr,
    playing: false,
    audio: null,
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Set playing state
  const togglePlaying = () =>
    dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true });
  // Set current song
  const SetCurrent = (id) => dispatch({ type: SET_CURRENT_SONG, data: id });

  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songs.length - 1);
    } else {
      SetCurrent(state.currentSong - 1);
    }
  };
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrent(0);
    } else {
      SetCurrent(state.currentSong + 1);
    }
  };

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songs: state.songs,
        playing: state.playing,
        audio: state.audio,
        nextSong,
        prevSong,
        SetCurrent,
        togglePlaying,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
};

export default PlayerState;
