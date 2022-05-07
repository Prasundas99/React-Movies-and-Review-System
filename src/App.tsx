import './App.css';
import IndividualMovies from './movies/IndividualMovies';
import { movieDTO } from './movies/movies.model';
function App() {
  const testMovie: movieDTO = {
    id: 1,
    title: 'test',
    poster: 'https://unsplash.com/photos/QHsUQ-_q-_Q',
  }

  return (
    <div>
      <IndividualMovies {...testMovie} />
    </div>
  );
}

export default App;
