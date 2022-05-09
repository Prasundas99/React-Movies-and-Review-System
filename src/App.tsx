import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config'
import configureValidations from './components/Validations';
import { useEffect, useState } from 'react';
import { claim } from './components/auth/auth.models';
import AuthenticationContext from  './components/auth/AuthenticationContext';
import { getClaims } from './components/auth/handleJWT';
import configureInterceptor from './components/utils/httpInterceptors';

configureValidations();
configureInterceptor();

function App() {

  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims())
  }, [])

  function isAdmin(){
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1;
  }

  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu />
        <div className="container">
          <Switch>
            {routes.map(route =>
              <Route key={route.path} path={route.path} exact={route.exact}>
                {route.isAdmin && !isAdmin() ? <>
                  You are not allowed to see this page
                </>:  <route.component />}
              </Route>)}
          </Switch>
        </div>
        <footer className="bd-footer py-5 mt-5 bg-light">
          <div className="container">
            React Movies {new Date().getFullYear().toString()}
          </div>
        </footer>
      </AuthenticationContext.Provider>
    </BrowserRouter>
  )
}

export default App;
