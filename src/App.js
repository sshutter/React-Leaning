import './index.css'
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title= 'Welcome to the new blog';
  // const likes = 50;
  // const person = { ma,e: 'yoshi', age: 30 };  // we can't output object or string
  // const link = "http://www.google.com";

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
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <h1>{ title }</h1> */}
          {/* <p>Liked : { likes } times</p> */}

          {/* <p>{ person }</p> */}
          
          {/* <p>{ 10 }</p> */}
          {/* <p>{ 'hello, ninjas' }</p> */}
          {/* <p>{ [1,2,3,4,5] }</p> */}
          {/* <p>{ Math.random() * 10 }</p> */}

          {/* <a href={link}>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
