import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*const title = 'Welcome to the new blog';
const likes = 50;
const link = "https://www.google.com";*/

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;

/*<h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>{10}</p>
        <p>{"Sharvari More"}</p>
        <p>{Math.random()*10}</p>
        <p>{[1,2,3,4,5]}</p>

        <a href={link}>Google Site</a>
*/