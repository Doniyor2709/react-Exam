import Link from "next/link";
import React from "react";

import "./style.scss";

const Footer = () => {
  return (
    <div className="container footer__container">
      <div className="footer__main">
        <p>Email: Xabibullayev68026@gmail.com</p>
      </div>
      <div className="footer__nav">
      <a href="https://t.me/asdfg8754"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="" /></a>
      <a href="https://t.me/asdfg8754"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /></a>
      <a href="https://t.me/asdfg8754"><img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="" /></a>
      </div>
    </div>
  );
};

export default Footer;



// <Link href="/about">About Us</Link>
// <Link href="/contact">Contact</Link>
