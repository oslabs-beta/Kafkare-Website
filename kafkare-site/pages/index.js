import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomePage from './homepage';
import Features from './features';
import AboutUs from './aboutUs';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mainContainer">
      <NavBar />
      <div>
        <div className="homePage" id="section1">
          <HomePage />
        </div>
        <div className="features-container" id="section2">
          <Features />
        </div>
        <div className="about-container" id="section3">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}
