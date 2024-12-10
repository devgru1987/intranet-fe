import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import './Header.css'

const Header = () => {
    const [isLoggedIn, setIsLogged] =  useState(false)
    const [canShowForm, setCanShowForm] =  useState(false)
    const showLoginForm = (bool) => setCanShowForm(bool)

    return (
        <header id="main-header">
            <div id="search">
                <input type="text" name="search-text" placeholder="Search site" id="search-field"/>
                <CiSearch size="1.8em" id="search-glass"/>
            </div>

            <div id="login-link">
                { isLoggedIn ? <button>Log Out</button> : <button onClick={() => showLoginForm(true)}>Login</button> }
            </div>

            {
                canShowForm && <div className="login-page">
                    <IoMdClose 
                        size="2em" 
                        id="login-form-close"  
                        onClick={() => showLoginForm(false)} 
                    />

                    <div className="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="Password" />
                        <input type="button" value="Login"  />
                    </div>
                </div>
            }

        </header>
    )
}

export default Header