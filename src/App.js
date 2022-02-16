import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component';
import ListSVG from './assets/list.svg';
import GridSVG from './assets/grid.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchField: '',
      gridView: 'grid-view',
      loading: true,
      error: false
    };
  }

  // Change view on toggle
  setGridView(gridView) {
    this.setState({
      gridView,
    });
  }

  // Fetch movies json data
  componentDidMount() {
    fetch('/php/movies.php')
      .then(response => response.json())
        .then(data => this.setState({ movies: data }))
      .catch(error => this.setState({ error: error.message }))
    
    // Load page after 2 seconds
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000)
  }



  // Change state when user start typing
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { movies, searchField, gridView } = this.state;
    // Movies search filter
    const filteredmovies = movies.filter(movie => movie.title.toLowerCase().includes(searchField.toLowerCase()));
    const { loading } = this.state;
    const { error } = this.state;
    
    if (loading) {
      return (
        <div className='loader'><span className='loader-text h1 text-white'>Loading...</span></div>
      );
    }

    if (error) {
      return (
        <div className="loader">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
          <span className='loader-text text-white'><h1>Movies could not be loaded check your server configuration...</h1>
                <p className='text-white'>* Make sure your PHP server is configured and is running correctly.</p>
                <p className='text-white'>* For better results make sure to map a custom domain name in virtualHosts and Hosts files e.g. movies.local. The easiest is to use laragon</p>
                  <p className='text-white'>* Still cannot make this application run please contact me (Tafara Shamu)</p>
                  <p className='text-white'>* A running app can also be found on <a target="_blank" rel="noreferrer" href="https://mv.tafarashamu.co.za">HERE!</a></p>
                {this.state.error && <div className='h3'>Error 500: {this.state.error}</div>}
          </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (

      <div className="App">
        <div className="container">
          <h1 className="display-4 text-center text-white">Greystone Technologies</h1>
          <h1 className="display-4 text-center my-5 text-white">Movies</h1>
          {/* Top Section */}
          <section className="row d-flex justify-content-center">
            {/* 
            *Search component
            */}
            <div className="col-md-7">
              <SearchBox
                placeholder="Type to search..."
                handleChange={this.handleChange}
              />
            </div>
            {/*
             Toggle button 
             */}
            <div className="col-md-5 mobile-margin-spacing">
              <div className="row">
                <div className='col-md-12'>
                  <div className="btn-group float-end" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" name="toggle" id="grid" className="btn-check" onClick={() => { this.setGridView('grid-view') }} autoComplete="off" />
                    <label htmlFor="grid" className={`btn btn-outline-secondary ${gridView === 'grid-view' ? 'active' : ''}`}>
                      <img className="text-white" src={GridSVG} alt="" />
                      Grid View
                    </label>
                    <input type="radio" name="toggle" id="list" className="btn-check"
                      onClick={() => { this.setGridView('list-view') }} autoComplete="off" />
                    <label htmlFor="list" className={`btn btn-outline-secondary ${gridView === 'list-view' ? 'active' : ''}`}>
                      <img className="text-white" src={ListSVG} alt="" />
                      List View
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 
          Display movies section 
          */}
          <section className={`main ${gridView}`}>
            <CardList movies={filteredmovies} />
          </section>
        </div>
      </div>
    );

  }
}

export default App;
