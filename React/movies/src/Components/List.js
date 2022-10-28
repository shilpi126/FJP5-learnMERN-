import React, { Component } from 'react'
import { movies } from './getMovies'
export default class List extends Component {
  render() {
 let movie = movies.results;
    return (
       <>
      {movie.length == 0 ? 
      (
        <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      ):(
        <div>
        <h3 className='text-center'>
          <strong>Treanding</strong>
        </h3>

        <div className='movie-list'>
          {movie.map((movieObj) => (
             <div className="card movie-card">
             <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top banner-img" alt="..." style={{height:"40vh", width:"20vw" }}/>
             {/* <div className="card-body"> */}
               <h5 className="card-title movie-title">{movieObj.original_title}</h5>
               {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
                <div className="button-wrapper">
                <a href="#" className="btn btn-primary movie-button">Go somewhere</a> 
              </div>
             </div>
          //  </div>
          ))}
        </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
        </div>
      )}

    </>

    )
  }
}
