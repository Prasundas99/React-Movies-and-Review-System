import { movieDTO } from './movies.model'
import  './individualMovies.model.css'
export default function IndividualMovies(props: movieDTO) {
  const buildLink = () => `/movies/${props.id}`
    return (
    <div className='div'>
        <a href={buildLink()}>
            <img alt='movie' src={props.poster} />
        </a>

        <p>
            <a href={buildLink()}>{props.title}</a>
        </p>
    </div>
  )
}
