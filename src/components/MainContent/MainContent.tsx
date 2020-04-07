import React from "react";
import './MainContent.css';
import { GiMechanicGarage } from 'react-icons/gi';
import { IoIosPricetag } from 'react-icons/io';
import { GoGear } from 'react-icons/go';
import { WiTime8 } from 'react-icons/wi';



const MainContent:React.FC = () => {
    return(
        <div className="MainContent-wrapper">
            <h2>Наши приймущества</h2>
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
                    <WiTime8/>
                    <p>Реальные сроки</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
