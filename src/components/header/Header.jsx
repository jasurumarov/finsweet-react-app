import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
// IMAGES
import siteLogo from "../../images/site-logo.svg"
import menuBtn from "../../images/menu-btn.svg"

const Header = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <header className='header'>
        <div className="container">
            <nav>
                <NavLink className={"header__logo"} to={"/"}>
                    <img src={siteLogo} alt="Site Logo" />
                </NavLink>
                <div className={`header__right ${ toggle ? "show" : ""}`}>
                    <ul className='header__right__list'>
                        <NavLink className={"header__right__list-item"} to={"/"}>Home</NavLink>
                        <NavLink className={"header__right__list-item"} to={"/aboutus"}>About Us</NavLink>
                        <NavLink className={"header__right__list-item"} to={"/careers"}>Careers</NavLink>
                        <NavLink className={"header__right__list-item"} to={"/services"}>Services</NavLink>
                        <NavLink className={"header__right__list-item"} to={"/blog"}>Blog</NavLink>
                        <NavLink className={"header__right__list-item"} to={"/products"}>Products</NavLink>
                    </ul>
                    <button className='header__right-cloneBtn'>Clone Project</button>
                </div>
                <button className='header__right-menuBtn'>
                    <img onClick={() => setToggle(!toggle)} src={menuBtn} alt="" />
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header