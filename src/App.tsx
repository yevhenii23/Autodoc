import React from 'react';
import './App.css';
import ParallaxScroll from "./components/ParallaxScroll/ParallaxScroll";
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent"
import LoginForm from "./components/LoginForm/LoginForm";
const App:React.FC = () => {
  return (
      <ParallaxProvider>
        <div className="App">
            <Header/>
            <ParallaxScroll/>
            <MainContent/>
            <LoginForm/>
            <Footer/>
        </div>
      </ParallaxProvider>
  );
}

export default App;
