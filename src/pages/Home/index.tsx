import { useEffect, useState } from "react";
import { landingPageDTO } from "../../movies/movies.model"
import MoviesList from "../../movies/MoviesList"

export default function Home() {
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
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />
            <h3>Upcomming Releases</h3>
            <MoviesList movies={movies.upcommingRelease} />
        </>
    )
}
