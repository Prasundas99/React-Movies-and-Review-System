import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import IndexGenres from './pages/Generes/IndexGenres';
import Menu from './components/Menu';
import CreateGeneres from './pages/Generes/CreateGeneres';
import EditGeneres from './pages/Generes/EditGeneres';
import IndexActors from './pages/Actors/IndexActors';
import CreateActors from './pages/Actors/CreateActors';
import EditActors from './pages/Actors/EditActors';
import CreateMovieTheators from './pages/Actors/CreateActors';
import EditMovieTheators from './pages/MovieTheators/EditMovieTheators';
import IndexMovieTheators from './pages/MovieTheators/IndexMovieTheators';
import CreateMovie from './movies/CreateMovie';
import EditMovie from './pages/Actors/EditActors';
import FilterMovies from './movies/FilterMovies';
//MovieTheators

const routes = [
  { path: '/genres', component: IndexGenres },
  { path: "/genres/create", component: CreateGeneres },
  { path: "/genres/edit", component: EditGeneres },

  { path: '/actors', component: IndexActors },
  { path: "/actors/create", component: CreateActors },
  { path: "/actors/edit", component: EditActors },

  { path: '/MovieTheators', component: IndexMovieTheators },
  { path: "/MovieTheators/create", component: CreateMovieTheators },
  { path: "/MovieTheators/edit", component: EditMovieTheators },


  { path: '/Movie/filter', component: FilterMovies },
  { path: "/Movie/create", component: CreateMovie },
  { path: "/Movie/edit", component: EditMovie },


  { path: "/", component: Home },
];


export default function RouteComponent() {
  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}