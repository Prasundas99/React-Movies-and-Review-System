import IndividualMovies from './IndividualMovies';
import { movieDTO } from './movies.model'
import "./MovieList.module.css";
export default function MoviesList(props: moviesListProps) {
    if(!props.movies) {
        return <div>Loading...</div>
    }
    else if(props.movies.length === 0) {
        return <div>No movies found</div>
    }else{
        return (
            <div className="movieList">
                {props && props.movies.map((movie)=> {
                    return <IndividualMovies key={movie.id} {...movie} />
                })}
            </div>
          )   
    }
}

interface moviesListProps{
    movies: movieDTO[] | undefined;
}