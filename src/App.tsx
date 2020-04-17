import React from 'react';
import './App.css';
import CarouselPage from "./components/CarouselPage/CarouselPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent"
import LoginForm from "./components/LoginForm/LoginForm";
import AboutMainContent from "./components/AboutMainContent/AboutMainContent";

const App:React.FC = () => {
  return (
      <div className="App">
          <Header/>
          <CarouselPage/>
          <MainContent/>
          <LoginForm/>
          <AboutMainContent/>
          <Footer/>
      </div>
  );
}

export default App;
