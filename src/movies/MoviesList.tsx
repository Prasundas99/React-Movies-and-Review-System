import IndividualMovies from './IndividualMovies';
import { movieDTO } from './movies.model'
import "./MovieList.module.css";
import GenericList from '../utils/GenericList';
export default function MoviesList(props: moviesListProps) {
    return (
    <GenericList list={props.movies}> 
        <div className="row">
            {props && props.movies?.map((movie) => {
                return <div className='col-md-3'  key={movie.id}> <IndividualMovies {...movie} /> </div>
            })}
        </div>
    </GenericList>
    )
}
interface moviesListProps {
    movies: movieDTO[] | undefined;
}