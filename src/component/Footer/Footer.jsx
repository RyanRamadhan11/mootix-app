import React from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="widget">
              <h3 className="widget-title">About Us</h3>
              <p>
                Aplikasi pemesanan tiket bioskop adalah suatu perangkat lunak yang dirancang untuk memudahkan pengguna dalam memesan 
                tiket untuk menonton film di bioskop. Aplikasi ini menyediakan berbagai fitur yang dapat meningkatkan pengalaman 
                pengguna dalam proses pemesanan tiket, memberikan informasi tentang film yang sedang tayang, dan mempermudah akses
                ke layanan bioskop.
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">Help Center</h3>
              <ul className="no-bullet">
                <li> <a href="#">Mootix</a>
                </li>
                <li>
                  <a href="#">+62-1234-5678</a>
                </li>
                <li>
                  <a href="#">Jln.Dahlan 76</a>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">Join Us</h3>
              <ul className="no-bullet">
                <li>
                  <a href="#">Lantai 40 EnigmaCamp</a>
                </li>
                <li>
                  <a href="#">Jln. Dahlan 76 Ragunan</a>
                </li>
                <li>
                  <a href="#">Dolorem respequem</a>
                </li>
             
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
            <h3 className="widget-title">Social Media</h3>
            <ul className="no-bullet">
            <li>
                <a href="#">
                <FaFacebook /> Facebook
                </a>
            </li>
            <li>
                <a href="#">
                <FaTwitter /> Twitter
                </a>
            </li>
            <li>
                <a href="#">
                <FaGoogle /> Google+
                </a>
            </li>
            <li>
                <a href="#">
                <FaPinterest /> Pinterest
                </a>
            </li>
            </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">News letter</h3>
              <form action="#" className="subscribe-form">
                <input type="text" placeholder="Email Address" />
              </form>
            </div>
          </div>
        </div>

        <div className="colophon">
          Copyright 2024 Mootix Apps, Designed by Kelompok 1 Enigmacamp. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
