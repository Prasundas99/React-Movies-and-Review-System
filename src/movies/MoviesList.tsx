import IndividualMovies from './IndividualMovies';
import { movieDTO } from './movies.model'
import "./MovieList.module.css";
import GenericList from '../utils/GenericList';
export default function MoviesList(props: moviesListProps) {
    return (
    <GenericList list={props.movies}> 
        <div className="movieList">
            {props && props.movies?.map((movie) => {
                return <IndividualMovies key={movie.id} {...movie} />
            })}
        </div>
    </GenericList>
    )
}
interface moviesListProps {
    movies: movieDTO[] | undefined;
}