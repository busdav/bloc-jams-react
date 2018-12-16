import React, {Component} from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom'; 
import blur from '../assets/images/blur_bg_3.jpg';

const bg = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${blur})`,

  /* Add the blur effect */
  // filter: "blur(2px)",
  // WebkitFilter: "blur(2px)",

  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData }
  }

  render() {
    return (
      <section className='library' style={ bg }>

        <div className="row">
          {/* wider column */}
          <div className="col-md-9 mb-4">
            <div className="row">
              {
                this.state.albums.map( (album, index) => 
                  <div className="card bg-dark text-white m-4" style={{width: "12rem"}}>
                    <img className="card-img" src={album.albumCover} alt={album.title} />  
                    <div class="card-img-overlay">
                      <Link to={`/album/${album.slug}`} key={index} style={{color: "white", textDecoration: "none"}}>
                        <h5 class="card-title">{album.title}</h5>
                        <p class="card-text">{album.artist}</p>
                        <p class="card-text">{album.songs.length} songs</p>
                      </Link>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

        {/* narrower column */}
          <div className="col-md-3 mb-4">
          {/* sidebar links */}
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="#">Latest additions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Classics</Link>
              </li>
              {/* more links */}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Library;