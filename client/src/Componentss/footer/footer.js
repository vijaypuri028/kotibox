import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <>
   <footer>
  <div className="content">
    <div className="top">
      <div className="logo-details">
        <i className="fab fa-slack" />
        <span className="logo_name">KOTIBOX</span>
      </div>
      <div className="media-icons">
        <Link href="#"><i class="bi bi-facebook"></i></Link>
        <Link href="#"><i class="bi bi-twitter"></i></Link>
        <Link href="#"><i class="bi bi-instagram"></i></Link>
        <Link href="#"><i class="bi bi-linkedin"></i></Link>
        <Link href="#"><i class="bi bi-youtube"></i></Link>
      </div>
    </div>
    <div className="link-boxes">
      <ul className="box">
        <li className="link_name">Company</li>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Contact us</Link></li>
        <li><Link href="#">About us</Link></li>
        <li><Link href="#">Get started</Link></li>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Contact us</Link></li>
        <li><Link href="#">About us</Link></li>
        <li><Link href="#">Get started</Link></li>
      </ul>
      <ul className="box">
        <li className="link_name">Services</li>
        <li><Link href="#">App design</Link></li>
        <li><Link href="#">Web design</Link></li>
        <li><Link href="#">Logo design</Link></li>
        <li><Link href="#">Banner design</Link></li>
        <li><Link href="#">App design</Link></li>
        <li><Link href="#">Web design</Link></li>
        <li><Link href="#">Logo design</Link></li>
        <li><Link href="#">Banner design</Link></li>
      </ul>
      <ul className="box">
        <li className="link_name">Account</li>
        <li><Link href="#">Profile</Link></li>
        <li><Link href="#">My account</Link></li>
        <li><Link href="#">Prefrences</Link></li>
        <li><Link href="#">Purchase</Link></li>
        <li><Link href="#">Profile</Link></li>
        <li><Link href="#">My account</Link></li>
        <li><Link href="#">Prefrences</Link></li>
        <li><Link href="#">Purchase</Link></li>
      </ul>
      <ul className="box">
        <li className="link_name">Technology</li>
        <li><Link href="#">HTML &amp; CSS</Link></li>
        <li><Link href="#">JavaScript</Link></li>
        <li><Link href="#">Photography</Link></li>
        <li><Link href="#">Photoshop</Link></li>
        <li><Link href="#">HTML &amp; CSS</Link></li>
        <li><Link href="#">JavaScript</Link></li>
        <li><Link href="#">Photography</Link></li>
        <li><Link href="#">Photoshop</Link></li>
      </ul>
      <ul className="box input-box">
        <li className="link_name">Subscribe</li>
        <li><input type="text" placeholder="Enter your email" /></li>
        <li><input type="button" defaultValue="Subscribe" /></li>
      </ul>
    </div>
  </div>
  <div className="bottom-details">
    <div className="bottom_text">
      <span className="copyright_text">Copyright © 2024 <Link href="#">KOTIBOX</Link>All rights reserved</span>
      <span className="policy_terms">
        <Link href="#">Privacy policy</Link>
        <Link href="#">Terms &amp; condition</Link>
      </span>
    </div>
  </div>
</footer>






    </>
  )
}
