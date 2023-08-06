import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from './search.svg';


const API_URL = "http://www.omdbapi.com?apikey=ee0358b8";

const movie1 = {
  "Title": "Miles Morales Ultimate Spiderman",
  "Year": "2021",
  "imdbID": "tt14311386",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg"
}


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Black Panther');
  }, []);

  return (
    <div className="App">
      <h1>Movie Magic: Explore The Cinematic Universe</h1>

      <div className="search">
        
        <input 
        placeholder="Search Title Or Term ..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value) }
        />

        <img 
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)} 
        />
      
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          
        </div>

        ) :
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>

        )}
    </div>
  );
};

export default App;
