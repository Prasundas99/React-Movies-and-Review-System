import IndexGenres from "./pages/genres/IndexGenres";
import CreateGenre from "./pages/genres/CreateGenre";
import EditGenre from "./pages/genres/EditGenre";

import IndexActors from "./pages/actors/IndexActors";
import CreateActor from "./pages/actors/CreateActor";
import EditActor from "./pages/actors/EditActor";

import IndexMovieTheaters from "./pages/movietheaters/IndexMovieTheaters";
import CreateMovieTheater from "./pages/movietheaters/CreateMovieTheater";
import EditMovieTheater from "./pages/movietheaters/EditMovieTheater";

import CreateMovie from "./pages/movies/CreateMovie";
import EditMovie from "./pages/movies/EditMovie";
import FilterMovies from "./pages/movies/FilterMovies";
import MovieDetails from './pages/movies/MovieDetails';

import LandingPage from "./pages/movies/LandingPage";
import RedirectToLandingPage from './components/utils/RedirectToLandingPage';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import IndexUsers from './components/auth/IndexUsers';

const routes = [
    {path: '/genres', component: IndexGenres, exact: true, isAdmin: true},
    {path: '/genres/create', component: CreateGenre, isAdmin: true},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre, isAdmin: true},

    {path: '/actors', component: IndexActors, exact: true, isAdmin: true},
    {path: '/actors/create', component: CreateActor, isAdmin: true},
    {path: '/actors/edit/:id(\\d+)', component: EditActor, isAdmin: true},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true, isAdmin: true},
    {path: '/movietheaters/create', component: CreateMovieTheater, isAdmin: true},
    {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater, isAdmin: true},

    {path: '/movies/create', component: CreateMovie, isAdmin: true},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie, isAdmin: true},
    {path: '/movies/filter', component: FilterMovies},
    {path: '/movie/:id(\\d+)', component: MovieDetails},

    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/users', component: IndexUsers, isAdmin: true},


    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes;