import React from "react";
import { IoMdHappy } from 'react-icons/io';
import { FaCarSide } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import './AboutMainContent.css';

 const AboutMainContent:React.FC = () => {
    return (
      <div className="AboutContent-wrapper">
          <h2>Наши цифры</h2>
          <div className="AboutIcons-wrapper">
              <div>
                  <IoMdHappy/>
                  <span>1500+</span>
                  <p>Довольных клиентов</p>
              </div>
              <div>
                  <FaCarSide/>
                  <span>9400+</span>
                  <p>Сделанных машин</p>
              </div>
              <div>
                  <MdTimer/>
                  <span>10 лет</span>
                  <p>На рынке</p>
              </div>
          </div>
      </div>
    );
};
export default AboutMainContent;