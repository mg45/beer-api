import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import SingleBeerView from './components/SingleBeerView';
import RandomBeerSingleView from "./components/RandomBeerSingleView";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
         <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/allbeers' component={AllBeers} />
          <Route path="/beer/:id" exact>
          <SingleBeerView />
          </Route>
          <Route exact path='/randombeersingleview' component={RandomBeerSingleView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;