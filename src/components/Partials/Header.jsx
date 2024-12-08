import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import './Header.css'

const Header = () => {
    const [hideMobileNav, setHideMobileNav] = useState(false)
    const toggleNav = () => setHideMobileNav(!hideMobileNav)
    const [isLoggedIn, setIsLogged] =  useState(false)
    return (
        <header id="main-header">
            <div id="search">
                <input type="text" name="search-text" placeholder="Search site"/>
                <CiSearch size="1.8em" id="search-glass"/>
            </div>
            <div id="login-link">
                { isLoggedIn ? <Link to={`/logout`}>Log Out</Link> : <Link to={`/login`}>Login</Link> }
            </div>
        </header>
    )
}

export default Header