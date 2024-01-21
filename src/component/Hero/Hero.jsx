import React from "react";
import Slide1 from "../../assets/images/home/film3.jpg"
import Slide2 from "../../assets/images/home/film2.jpg"
import Slide3 from "../../assets/images/home/film1.jpg"
import Thumb1 from "../../assets/images/home/thumb1.jpg"
import Thumb2 from "../../assets/images/home/thumb2.jpg"
import Thumb3 from "../../assets/images/home/thumb3.jpg"
import LateMovie1 from "../../assets/images/home/lateMovie1.jpg"
import LateMovie2 from "../../assets/images/home/lateMovie2.jpg"
import LateMovie3 from "../../assets/images/home/lateMovie3.jpg"
import LateMovie4 from "../../assets/images/home/lateMovie4.jpg"

import { Carousel } from "react-bootstrap";

function Hero() {
  return (
    <main className="main-content">
      <div className="container-fluid">
        <div className="page">
          <div className="row">
            <div className="col-md-9">
			<Carousel>
      <Carousel.Item>
        <a href="#">
          <img className="d-block w-100" src={Slide1} alt="Slide 1" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#">
          <img className="d-block w-100" src={Slide2} alt="Slide 2" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#">
          <img className="d-block w-100" src={Slide3} alt="Slide 3" />
        </a>
      </Carousel.Item>
    </Carousel>
              {/* <div className="slider">
                <ul className="slides">
                  <li>
                    <a href="#">
                      <img src={Slide1} alt="Slide 1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Slide2} alt="Slide 2" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Slide3} alt="Slide 3" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href="#">
                      <img src={Thumb1} alt="Movie 1" />
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href="#">
                      <img src={Thumb2} alt="Movie 2" />
                    </a>
                  </div>
                </div>
				<div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href="#">
                      <img src={Thumb3} alt="Movie 2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="latest-movie mt-4">
                <a href="#">
                  <img src={LateMovie1} alt="Movie 3" />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="latest-movie mt-4">
                <a href="#">
                  <img src={LateMovie2}  alt="Movie 4" />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="latest-movie mt-4">
                <a href="#">
                  <img src={LateMovie3}  alt="Movie 5" />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="latest-movie mt-4">
                <a href="#">
                  <img src={LateMovie4}  alt="Movie 6" />
                </a>
              </div>
            </div>
          </div>

          <div className="row">
			<div className="col-md-4">
				<h2 className="section-title">Februari premiere</h2>
				<p>
					Beberap film yang akan tayang dibulan februari
				</p>
				<ul className="movie-schedule">
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 1</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 2</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 3</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 4</a>
					</h2>
					</li>
				</ul>
			</div>
			<div className="col-md-4">
				<h2 className="section-title">Maret premiere</h2>
				<p>
					Beberap film yang akan tayang dibulan Maret
				</p>
				<ul className="movie-schedule">
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 1</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 2</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 3</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 4</a>
					</h2>
					</li>
				</ul>
			</div>
			<div className="col-md-4">
				<h2 className="section-title">April premiere</h2>
				<p>
					Beberap film yang akan tayang dibulan Juni
				</p>
				<ul className="movie-schedule">
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 1</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 2</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 3</a>
					</h2>
					</li>
					<li>
					<div className="date">16/12</div>
					<h2 className="entry-title">
						<a href="#">Movie 4</a>
					</h2>
					</li>
				</ul>
			 </div>
		  </div>
		  </div>
	  </div>
    </main>
  );
}

export default Hero;
