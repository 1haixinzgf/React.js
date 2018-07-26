import * as ActionsTypes from './actionTypes';

export function changeSong(song) {
  return {
    type:ActionsTypes.CHANGE_SONG,
    song
  }
}
export function showPlayer(showStatus) {
  return {
    type: ActionsTypes.SHOW_PLAYER,
    showStatus
  }
}
export function setSongs(songs) {
  return {
    type: ActionsTypes.SET_SONGS,
    songs
  }
}
export function removeSong(id) {
  return {
    type: ActionsTypes.REMOVE_SONG_FORM_LIST,
    id
  }
}
