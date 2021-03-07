import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const routes = ['home', 'about'];
    return (
        <nav className="nav-bar">
            <ul className="nav-links">
                {routes.map(route => <li key={route}>
                    <NavLink
                        className="list"
                        to={route === 'home' ? '/' : `/${route}`}
                        exact
                        activeStyle={{ 'color': 'green' }}>
                        {route.toUpperCase()}
                    </NavLink></li>)}
            </ul>
        </nav>
    )
}

export default NavBar
