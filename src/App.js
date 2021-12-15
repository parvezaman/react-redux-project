import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Admin from './AdminPanel';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
