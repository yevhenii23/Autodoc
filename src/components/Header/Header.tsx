import React from "react";
import "./Header.css";
import { FaPhoneSquare } from "react-icons/fa";
const Logo = require('./logo.png');


const Header:React.FC = () => {
    return (
        <div className='Header-wrapper'>
            <div className="Image-wrapper">
                <img src={Logo} alt='logo' className="Logo"/>
            </div>
            <ul>
                <li>Работы</li>
                <li>Цены</li>
                <li>О нас</li>
                <li>Контакты</li>
                <li>FAQ</li>
            </ul>
            <div className="Phone-wrapper">
                <FaPhoneSquare/>
                <h3>46 77 06 60</h3>
                <span>RU</span>
            </div>
        </div>
    );
};

export default Header;