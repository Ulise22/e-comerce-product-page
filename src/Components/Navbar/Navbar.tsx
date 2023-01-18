import {useState} from "react";
import menu from "./../Images/icon-menu.svg";
import close from './../Images/icon-close.svg';
import logo from './../Images/logo.svg';
import cart from './../Images/icon-cart.svg';
import avatar from './../Images/image-avatar.png';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return(
        <nav className="navbar">
            <div className="navbar__container">
                <div onClick={() => setOpen(!open)} className="navbar__menu">
                    {open ? <img src={close} alt="close" /> : <img src={menu} alt="menu" />}
                </div>

                <div className="navbar__info">
                    <div className="navbar__logo">
                        <img src={logo} alt="sneakers" />
                    </div>

                    <ul className="navbar__list">
                        <li className="navbar__list__item">Collections</li>
                        <li className="navbar__list__item">Men</li>
                        <li className="navbar__list__item">Women</li>
                        <li className="navbar__list__item">About</li>
                        <li className="navbar__list__item">Contact</li>
                    </ul>
                </div>

                <div className="navbar__user">
                    <div className="navbar__user__cart">
                        <img src={cart} alt="cart" />
                    </div>

                    <div className="navbar__user__avatar">
                        <img src={avatar} alt="human" className="navbar__user__avatar__img" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;