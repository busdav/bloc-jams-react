import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

          <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src="assets/images/bloc_jams_logo.png" alt="logo" style={{width: "3rem"}} />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                {/* left navigation links */}
                <ul className="navbar-nav mr-auto">
          
                  {/* active navigation link */}
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
          
                  {/* regular navigation link */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/Library">Library</Link>
                  </li>
          
                  {/* more navigation links */}
          
                </ul>
          
                {/* right navigation link */}
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

          {/* Old version: 
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
          <h1>Bloc Jams</h1> 
        </header> */}
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
