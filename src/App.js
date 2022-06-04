
import Home from './components/Home';
import Navbar from './components/Nav';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Create from './components/Create';
import Details from './components/BookDetails';
import NotFound from './components/404';
import Edit from './components/EditBlog';



function App() { 
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
  
      <div className="content">
        <Switch>
            <Route exact path="/">
               <Home  />
            </Route>

            <Route  path="/create">
               <Create />
            </Route>

            <Route  path="/posts/:id">
               <Details />
            </Route>

            <Route  path="/edit/:id">
               <Edit />
            </Route>

            

            <Route  path="*">
               <NotFound />
            </Route>

        </Switch>
       
      </div>
  
    </div>

    </Router>
  );
}

export default App;
