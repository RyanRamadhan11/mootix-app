import React from 'react';
import { Link } from 'react-router-dom'; 

import review1 from "../../assets/images/home/film3.jpg"
import review2 from "../../assets/images/home/film2.jpg"
import review3 from "../../assets/images/home/film1.jpg"
import review4 from "../../assets/images/home/thumb1.jpg"
import review5 from "../../assets/images/home/thumb2.jpg"
import review6 from "../../assets/images/home/thumb3.jpg"
import review7 from "../../assets/images/home/lateMovie1.jpg"
import review8 from "../../assets/images/home/lateMovie2.jpg"



function Review() {

    const imageStyle = {
        height: '10em',  // Atur tinggi gambar sesuai kebutuhan
    };

    return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span>Movie Review</span>
                    </div>

                    <div className="filters">
                        <select name="#" id="#" placeholder="Choose Category">
                            <option value="#">Action</option>
                            <option value="#">Drama</option>
                            <option value="#">Fantasy</option>
                            <option value="#">Horror</option>
                            <option value="#">Adventure</option>
                        </select>
                        <select name="#" id="#">
                            <option value="#">2012</option>
                            <option value="#">2013</option>
                            <option value="#">2014</option>
                        </select>
                    </div>

                    <div class="movie-list">
						<div class="movie">
							<div class="movie-poster"  style={imageStyle}><img src={review1} alt="#" /></div>
							<div class="movie-title"><Link to="">Marvel </Link></div>
							<p> Ulasan film Marvel Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
						</div>
						<div class="movie">
							<div class="movie-poster" style={imageStyle}><img src={review2} alt="#" /></div>
							<div class="movie-title"><Link to="">Movie 2</Link></div>
							<p> Ulasan film Movie 2Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
						</div>
						<div class="movie">
							<div class="movie-poster" style={imageStyle}><img src={review3} alt="#" /></div>
							<div class="movie-title"><Link to="">Movie 3</Link></div>
							<p> Ulasan film Movie 3 Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
						</div>
						<div class="movie">
							<div class="movie-poster" style={imageStyle}><img src={review4} alt="#" /></div>
							<div class="movie-title"><Link to="">Movie 4</Link></div>
							<p>Ulasan film Movie 4 Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
						</div>
						<div class="movie">
							<div class="movie-poster" style={imageStyle}><img src={review5} alt="#" /></div>
							<div class="movie-title"><Link to="">Movie 5</Link></div>
							<p>Ulasan film Movie 5 Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
						</div>
						<div class="movie">
							<div class="movie-poster" style={imageStyle}><img src={review6} alt="#" /></div>
							<div class="movie-title"><Link to="">Movie 6</Link></div>
							<p>Ulasan film Movie 6 Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
						</div>
						<div class="movie">
							<div class="movie-poster" style={imageStyle}><img src={review7} alt="#" /></div>
							<div class="movie-title"><Link to="">Movie 7</Link></div>
							<p>Ulasan film Movie 7 Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
                        </div>
						<div class="movie">
							<div class="movie-poster" style={imageStyle}><img src={review8} alt="#" /></div>
							<div class="movie-title"><Link to="">Movie 8</Link></div>
							<p>Ulasan film Movie 8 Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
						</div>
					</div> 

                    <div className="pagination">
                        <Link to="#" className="page-number prev"><i className="fa fa-angle-left"></i></Link>
                        <span className="page-number current">1</span>
                        <Link to="#" className="page-number">2</Link>
                        <Link to="#" className="page-number">3</Link>
                        <Link to="#" className="page-number">4</Link>
                        <Link to="#" className="page-number">5</Link>
                        <Link to="#" className="page-number next"><i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Review;
