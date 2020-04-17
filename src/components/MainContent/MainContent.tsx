import React from "react";
import './MainContent.css';
import { GiMechanicGarage } from 'react-icons/gi';
import { IoIosPricetag } from 'react-icons/io';
import { GoGear } from 'react-icons/go';
import { GiSpeedometer } from 'react-icons/gi';



const MainContent:React.FC = () => {
    return(
        <div className="MainContent-wrapper">
            <h2>Наши преймущества</h2>
            <div className="About">
                <div>
                    <GiMechanicGarage/>
                    <p>Опытные механики</p>
                </div>
                <div>
                    <IoIosPricetag />
                    <p>Адекватные цены</p>
                </div>
                <div>
                    <GoGear/>
                    <p>Качественные запчасти</p>
                </div>
                <div>
                    <GiSpeedometer/>
                    <p>Реальные сроки</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
