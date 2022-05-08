import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IndexGenres from './Generes/IndexGenres';
import Menu from './Menu';
import { landingPageDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';
function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});



  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [{
          id: 1,
          title: 'In Theaters',
          poster: 'https://source.unsplash.com/random',
        },
        {
          id: 2,
          title: 'In Theaters',
          poster: 'https://source.unsplash.com/random',
        }
        ],
        upcommingRelease: [{
          id: 1,
          title: 'Upcomming Release',
          poster: 'https://source.unsplash.com/random',
        },
        {
          id: 2,
          title: 'Upcomming Release',
          poster: 'https://source.unsplash.com/random',
        }]
      });

    }, 1000)
    return () => clearTimeout(timerId);
  });

  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path="/genres" element={<IndexGenres />} />


          <Route path="/" element={
            <>
              <h3>In Theaters</h3>
              <MoviesList movies={movies.inTheaters} />
              <h3>Upcomming Releases</h3>
              <MoviesList movies={movies.upcommingRelease} />
            </>
          } />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
