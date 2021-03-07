import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Product from './components/Products/Product';
import Create from './components/Forms/Create'
import Update from './components/Forms/Update'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/add" component={Create} />
        <Route exact path="/update/:id" component={Update} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default App
