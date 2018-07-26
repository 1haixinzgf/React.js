import React, { Component } from 'react';
import Miniplayer from '../components/play/Miniplayer';
import { connect } from 'react-redux';
import { changeSong } from '../redux/actions';
const mapStateToProps = (state) => ({
  currentSong: state.song,
  playSongers: state.songs
});

const mapDispatchToProps = (dispatch) => ({//dispatch 会承载一个方法，将这个方法交给actions
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Miniplayer);