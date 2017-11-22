import React, { Component } from 'react';
import "./Video.css";
import video from './drive_time_lapse.mp4';

const RoadVideo = () => (
    <div>
        <header className="v-header container">
            <div className="fullscreen-video-wrap">
                <video className='videoTag' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
            <div className="header-overlay"></div>
            <div className="header-content text-md-center">
                <h1>Welcome to dTrour</h1>
                <p>Don't forget to stop and take a dTour!</p>
                <a className="btn">Lets Go!</a>
            </div>
        </header>
        {/* the area is there for visual only, we can remove this after other areas are completed */}
        <section className="section section-a">
            <div className="container">
                <h2>Section A</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
            </div>
        </section>

        <section className="section section-b">
            <div className="container">
                <h2>Section B</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
            </div>
        </section>
        {/* end holder area..everthing between can be removed later */}
    </div >
);

export default RoadVideo;