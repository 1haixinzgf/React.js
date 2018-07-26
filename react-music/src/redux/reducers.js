import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';

const initialState = {
  song: {},
  songs: [],
  showStatus: false
}

const reducer = combineReducers({
  song,
  songs,
  showStatus
}); // 创建一个reducer

// reducer 是一个函数，第一个参数是state里面的数据，第二个是action

function song (song = initialState.song, action) { // 返回新的状态
  switch (action.type) {
    case ActionTypes.CHANGE_SONG:
      return action.song
    default:
      return song
  }
}

function songs (songs = initialState.songs, action) {
  switch(action.type) {
    case ActionTypes.SET_SONGS:
      return action.songs;
    case ActionTypes.REMOVE_SONG_FORM_LIST:
      return songs.filter(song => action.id !==song.id)
    default:
      return songs;
  }
}

function showStatus (showStatus = initialState.showStatus, action) {
  switch (action.type) {
    case ActionTypes.SHOW_PLAYER:
      return action.showStatus;
  default:
    return showStatus;
  }
}

export default reducer;
