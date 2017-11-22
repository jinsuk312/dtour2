import React from 'react';
import { Map } from "../components/Map";
import { Video } from "../components/Video";
import "./MainStyle.css";
import { Modal } from '../components/Modal';
import "./scroll.js";
import { Navbar } from '../components/Navbar';
const MainPage = () => (
    <div>
        <Navbar />
        <header className="v-header container">
            <div className="fullscreen-video-wrap">
                <video className='videoTag' autoPlay loop muted>
                    <source src={Video} type='video/mp4' />
                </video>
            </div>
            <div className="header-overlay"></div>
            <div className="header-content text-md-center mess">
                <h1>Welcome to dTour</h1>
                <p>Don't forget to stop and take a dTour!</p>
                <a href="#" className="btn scroll-down"></a>
            </div>
        </header>
        <section className="ok">
        <section className="map-wrap">
            <Map />
        </section>
        </section>
    </div >
);

export default MainPage;