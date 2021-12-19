import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Admin from './AdminPanel';
import { ToastContainer } from 'react-toastify';
import NotFound from './Pages/NotFound/NotFound';
import NavigationBar from './Pages/Shared/NavigationBar/NavigationBar';
import Login from './AdminPanel/Authentication/Login/Login';
import HireThisBook from './Pages/HomePage/HireThisBook/HireThisBook';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavigationBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/hire/:id">
          <HireThisBook/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
