import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import IndexGenres from './Generes/IndexGenres';
import Menu from './Menu';


const routes = [
  { path: '/genres', component: IndexGenres },
  { path: "/", component: Home }
]


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