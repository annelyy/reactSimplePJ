import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">     {/* 为什么用className因为这是一个jsx文件，会render成html文件，变成class，然后class会和js名字重合 */}
        <Navbar /> {/* 不会变，但是下面的包含在Switch里面的会 */}
        <div className="content">
          <Switch> {/* switch里面的确保每次浏览器里只有一个route。从上至下匹配。如果switch不包括所有route，可能会同时render多个route */}
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
            {/* 除了上面以外的所有的都会落到这里 */}
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
