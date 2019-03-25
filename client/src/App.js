import React, { Fragment } from 'react';
// import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

// Import Routes
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import PostEdit from './components/PostEdit';

const App = () => ( 
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/posts/:id' component={PostEdit} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    {/* <Footer /> */}
  </Fragment>
);


export default App;
