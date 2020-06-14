import React from 'react';
import './app.css';
import Alllocations from  './components/allLocations';
import TopNavigation from  './components/topNavigation';
import Addlocation from  './components/location/addLocation';
import Editlocation from  './components/location/editLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";

class App extends React.Component{
  render(){ 
      return(
            <Container className="mainwrapper">
                  <TopNavigation />
                  <Router>
                      <Switch>
                      <Route exact  path="/" component={Alllocations} />
                      <Route  path="/addlocation" component={Addlocation} />
                      <Route  path="/editlocation/:id" component={Editlocation} />
                      </Switch>
                  </Router>
             </Container>
      );
  } 
}
export default App;
