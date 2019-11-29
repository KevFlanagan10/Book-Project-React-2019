import React from 'react';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Submit from './components/submit';
import Read from './components/read';
import Edit from './components/edit';
import BioPage from './components/bioPage';
import MoviesTV from './components/moviesTV';

class App extends React.Component {
  // rendering components into DOM
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="secondary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/submit">Submit Book</Nav.Link>
              <Nav.Link href="/bioPage">BioPage</Nav.Link>
              <Nav.Link href="/moviesTV">MoviesTV</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/submit" component={Submit} />
            <Route path="/read" component={Read} />
            <Route path="/bioPage" component={BioPage} />
            <Route path="/moviesTV" component={MoviesTV} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
