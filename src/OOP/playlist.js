var Song = require('./song');

class Playlist {

  constructor (name) {
    this.name = name
    this.songs = []
  }

  isEmpty () {
    return this.songs.length == 0
  }

  addSong(song) {
    this.songs.push(song)
  }

  songNames() {
    return this.songs.map(s => s.name)
  }

  totalDuration() {
    return this.songs.map(s => s.duration).reduce((a,b) => a + b, 0)
  }

  swap(song1, song2) {
    let idx1 = this.songs.indexOf(song1)
    let idx2 = this.songs.indexOf(song2)
    let tmp = this.songs[idx1]
    this.songs[idx1] = this.songs[idx2]
    this.songs[idx2] = tmp
  }

}

module.exports = Playlist;
