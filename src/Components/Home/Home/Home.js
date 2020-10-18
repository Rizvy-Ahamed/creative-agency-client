import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeLogo from '../HomeLogo/HomeLogo';
import Service from '../Services/Service';
import SlideImage from '../SlideImage/SlideImage';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomeLogo></HomeLogo>
      <Service></Service>
      <SlideImage></SlideImage>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;