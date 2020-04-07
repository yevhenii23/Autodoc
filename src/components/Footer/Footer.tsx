import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookSquare, FaTelegram, FaYoutube } from 'react-icons/fa';

const Logo = require('../Header/logo.png')

const Footer:React.FC = () => {
    return (
        <div className="Footer-wrapper">
            <div className="Logo-wrapper">
                <img src={Logo}/>
            </div>
            <div className="Text">
                C понедельника по пятницу <br/>
                7:30 до 16:00
            </div>
            <ul className="Icons-social">
                <li><FaInstagram/></li>
                <li><FaFacebookSquare/></li>
                <li><FaTelegram/></li>
                <li><FaYoutube/></li>
            </ul>
        </div>
    );
}

export default Footer;