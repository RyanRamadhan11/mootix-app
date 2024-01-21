import React from 'react';
import { Link } from 'react-router-dom';

import about from '../../assets/images/movie.jpg'
import person1 from '../../assets/images/person1.jpeg'
import person2 from '../../assets/images/person2.jpg'
import person3 from '../../assets/images/person3.jpg'
import person4 from '../../assets/images/person4.jpg'
import person5 from '../../assets/images/person5.jpg'

import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaInstagram } from "react-icons/fa";

function About() {
    return (
        <main className="main-content">
            <div className="container h-100">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/home">Home</Link>
                        <span>About us</span>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <figure><img  style={{height: '18em'}} src={about} alt="figure image" /></figure>
                        </div>
                        <div className="col-md-8">
                            <p className="leading">Selamat datang di Mootix App, solusi terbaik untuk pengalaman pemesanan tiket film bioskop Anda!</p>
                            <p>Mootix App memudahkan Anda untuk menikmati film favorit dengan cara yang lebih praktis dan efisien. Temukan kebebasan dalam memilih film yang ingin Anda saksikan, pilih waktu yang sesuai dengan jadwal Anda, dan pesan tiket dengan mudah melalui aplikasi kami.</p>
                            <p>Terinspirasi oleh keinginan untuk memberikan layanan terbaik kepada pengguna kami, Mootix App didesain untuk memberikan pengalaman pemesanan tiket yang lancar dan menyenangkan. Nikmati kenyamanan tanpa batas saat Anda menjelajahi berbagai pilihan film dan teater, semuanya dalam genggaman tangan Anda.</p>
                            <p>Jangan lewatkan momen-momen seru di bioskop. Dengan Mootix App, Anda bisa fokus menikmati film favorit tanpa khawatir kehabisan tiket. Ayo, jelajahi dunia hiburan dengan cara yang lebih modern dan praktis bersama Mootix App!</p>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-md-9">
                            <h2 className="section-title">Inspiration &amp; Mootix App</h2>
                            <p>Terinspirasi oleh keinginan untuk memberikan layanan terbaik kepada pengguna kami, Mootix App didesain untuk memberikan pengalaman pemesanan tiket yang lancar dan menyenangkan. Nikmati kenyamanan tanpa batas saat Anda menjelajahi berbagai pilihan film dan teater, semuanya dalam genggaman tangan Anda.</p>
                            <p>Jangan lewatkan momen-momen seru di bioskop. Dengan Mootix App, Anda bisa fokus menikmati film favorit tanpa khawatir kehabisan tiket. Ayo, jelajahi dunia hiburan dengan cara yang lebih modern dan praktis bersama Mootix App!</p>
                        </div>
                        
                    </div>

                    <h2 className="section-title mt-5">Our Team 1 - Mootix App</h2>
                    <div class="row">
							<div class="col-md-4">
								<div class="team mt-3">
									<div class="team-image"><img src={person1} alt=""/></div>
									<h2 class="team-name">Ryan Ramadhan</h2>
									<p class="team-title">Frontend</p>
									<div class="social-links">
                                        <Link to="" className="facebook"><FaFacebook /></Link>
                                        <Link to="" className="twitter"><FaTwitter /></Link>
                                        <Link to="" className="google-plus"><FaGoogle /></Link>
										<Link to="" class="google-plus"><FaLinkedin /></Link>
										<Link to="" class="pinterest"><FaInstagram /></Link>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="team mt-3">
                                <div class="team-image"><img src={person2} alt=""/></div>
									<h2 class="team-name">Andre Riyanto</h2>
									<p class="team-title">Frontend</p>
									<div class="social-links">
                                        <Link to="" className="facebook"><FaFacebook /></Link>
                                        <Link to="" className="twitter"><FaTwitter /></Link>
                                        <Link to="" className="google-plus"><FaGoogle /></Link>
										<Link to="" class="google-plus"><FaLinkedin /></Link>
										<Link to="" class="pinterest"><FaInstagram /></Link>
									</div>
								</div>
							</div>
                            <div class="col-md-4">
								<div class="team mt-3">
									<div class="team-image"><img src={person3} alt=""/></div>
									<h2 class="team-name">Anrico</h2>
									<p class="team-title">Frontend</p>
									<div class="social-links">
                                        <Link to="" className="facebook"><FaFacebook /></Link>
                                        <Link to="" className="twitter"><FaTwitter /></Link>
                                        <Link to="" className="google-plus"><FaGoogle /></Link>
										<Link to="" class="google-plus"><FaLinkedin /></Link>
										<Link to="" class="pinterest"><FaInstagram /></Link>
									</div>
								</div>
							</div>
					</div>
                    <div class="row mt-4">
                            <div class="col-md-6">
								<div class="team mt-3">
									<div class="team-image"><img src={person4} alt=""/></div>
									<h2 class="team-name">Baskara Restu</h2>
									<p class="team-title">Backend</p>
									<div class="social-links">
                                        <Link to="" className="facebook"><FaFacebook /></Link>
                                        <Link to="" className="twitter"><FaTwitter /></Link>
                                        <Link to="" className="google-plus"><FaGoogle /></Link>
										<Link to="" class="google-plus"><FaLinkedin /></Link>
										<Link to="" class="pinterest"><FaInstagram /></Link>
									</div>
								</div>
							</div>
                            <div class="col-md-6">
								<div class="team mt-3">
									<div class="team-image"><img src={person5} alt=""/></div>
									<h2 class="team-name">Leonardo</h2>
									<p class="team-title">Backend</p>
									<div class="social-links">
                                        <Link to="" className="facebook"><FaFacebook /></Link>
                                        <Link to="" className="twitter"><FaTwitter /></Link>
                                        <Link to="" className="google-plus"><FaGoogle /></Link>
										<Link to="" class="google-plus"><FaLinkedin /></Link>
										<Link to="" class="pinterest"><FaInstagram /></Link>
									</div>
								</div>
							</div>
					</div>
                </div>
            </div>
        </main>
    );
}

export default About;
