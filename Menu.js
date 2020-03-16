import React from "react"
import { Route, NavLink } from "react-router-dom"
import Morning from "./menu/Morning"
import Cake from "./menu/Cake"
import Beverages from "./menu/Beverages"

const Menu = () => {
  return (
    <div className="page">
      <div className="nav">
        <NavLink to="/menu/morning" activeClassName="active">
          Morning
        </NavLink>
        <NavLink to="/menu/cake" activeClassName="active">
          Cake
        </NavLink>
        <NavLink to="/menu/beverages" activeClassName="active">
          Beverages
        </NavLink>
      </div>

      <Route path="/menu/morning" component={Morning} />
      <Route path="/menu/cake" component={Cake} />
      <Route path="/menu/beverages" component={Beverages} />
    </div>
  )
}

export default Menu
