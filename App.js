import React, { Component } from "react"
import { Route, NavLink, Switch } from "react-router-dom"
import "./App.css"
import Home from "./Home"
import About from "./About"
import Menu from "./Menu"
import Buy from "./Buy"


// class component
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/menu/morning" activeClassName="active">
            Menu
          </NavLink>
          <NavLink to="/buy" activeClassName="active">
            Buy
          </NavLink>
          
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/buy" component={Buy} />
          
        </Switch>
      </div>
    )
  }
}

export default App
