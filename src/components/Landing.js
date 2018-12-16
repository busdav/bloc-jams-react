import React from 'react';
import { Link } from 'react-router-dom';
import landing from "../assets/images/landing.jpg";

const bg = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${landing})`,

    /* Add the blur effect */
    // filter: "blur(2px)",
    // WebkitFilter: "blur(2px)",
  
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

const Landing = () => (

  <section className="landing">
      <section className="jumbotron" style={ bg }>
        <img src="assets/images/bloc_jams_logo.png" alt="logo" style={{width: "12rem"}} />
        <h1 className="display-2" style={{color: "white"}}>Turn the music up!</h1>
        <p className="lead" style={{color: "white", fontWeight: "bold"}}>The world's first music player with only one album.</p>
        <Link className="btn btn-lg btn-primary" to="/library" role="button">Check out our library »</Link>
      </section>

    <div className="row">
      {/* wider column */}
      <div className="col-md-12 mb-4">

        {/* nested columns */}
        <div className="row">
        
          {/* first nested column */}
          <div className="col-md">
            <h3 className="display-5">Choose your music</h3>
            <p>
              The world is full of music; why should you have to listen to music that someone else chose?
            </p>
            {/* <a href="#" className="btn btn-primary">Button</a> */}
          </div>
        
          {/* second nested column */}
          <div className="col-md">
            <h3 className="display-5">Unlimited, streaming, ad-free</h3>
            <p>
              No arbitrary limits. No distractions.
            </p>
          </div>
        
          {/* third nested column */}
          <div className="col-md">
            <h3 className="display-5">Mobile enabled</h3>
            <p>
              Listen to your music on the go. This streaming service is available on all mobile platforms.
            </p>
          </div>
        </div>
      </div>
      {/* narrower column */}
      {/* <div className="col-md-4 mb-4"> */}
        {/* sidebar links */}
      {/* </div> */}
    </div>
  </section>
);


  {/* Old version: 
    <section className="landing">
    <h1 className="hero-title">Turn the music up!</h1>
    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
</section> 
);*/}

export default Landing;