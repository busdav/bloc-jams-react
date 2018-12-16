import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
// import sunset from '../assets/images/sunset.jpg';

// const bg = {
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url(${sunset})`,

//   /* Add the blur effect */
//   // filter: "blur(2px)",
//   // WebkitFilter: "blur(2px)",

//   /* Center and scale the image nicely */
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
// };
class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      isHovered: false,
      playAndPauseButton: <ion-icon name="play"></ion-icon>,
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: 1
    }

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }

  formatTime(time) {
    if (isNaN(time)) { return "-:--"; }
    const minutes = Math.floor(time/60); 
    const seconds = Math.floor(time % 60);
    if (seconds < 10) {
      return minutes + ":0" + seconds;
    } else {
      return minutes + ":" + seconds;
    }
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false })
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(this.state.album.songs.length, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e) {
    // const newTime = this.formatTime(this.audioElement.duration * e.target.value);
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }

  render() {
    return (
      <section className="album" style={{backgroundColor: "lightCyan"}}>
        <div className="row">
          <div className="col-md-6">
            <section className="card" id="album-info" style={{width: "30rem"}}>
              <img className="card-img-top" id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
              <div className="card-body">
                <h4 id="album-title">{this.state.album.title}</h4>
                <h6 className="artist">{this.state.album.artist}</h6>
                <div id="release-info">{this.state.album.releaseInfo}</div>
              </div>
            </section>
          </div>
          <div className="col-md-6" style={{"margin-top": "3rem"}}>
            <table id="song-list">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>  
              <tbody>
                {
                  this.state.album.songs.map( (song, index) => 
                    <tr className="song" key={index} onClick={() => this.handleSongClick(song)} 
                      onMouseEnter={() => this.setState({isHovered: index+1})}
                      onMouseLeave={() => this.setState({isHovered: false})}>
                      <td className="song-actions">
                        <button id="song-action-btns">
                        { (this.state.currentSong.title === song.title) ?
                            <span className={this.state.isPlaying ? "ion-md-pause" : "ion-md-play"}></span>
                            :
                            (this.state.isHovered === index+1) ?
                              <span className="ion-md-play"></span>
                              :
                              <span className="song-number">{index+1}</span>
                        }
                        </button>
                      </td>
                      <td>{song.title}</td>
                      <td>{this.formatTime(song.duration)}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
            <PlayerBar
            isPlaying={this.state.isPlaying}
            currentSong={this.state.currentSong}
            currentTime={this.audioElement.currentTime}
            duration={this.audioElement.duration}
            volume={this.audioElement.volume}
            handleSongClick={() => this.handleSongClick(this.state.currentSong)}
            handlePrevClick={() => this.handlePrevClick()}
            handleNextClick={() => this.handleNextClick()}
            handleTimeChange={(e) => this.handleTimeChange(e)}
            handleVolumeChange={(e) => this.handleVolumeChange(e)}
            formatTime={(time) => this.formatTime(time)}
          />
      </section>
    );
  }
}

export default Album;
