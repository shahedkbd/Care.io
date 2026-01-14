import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <Logo></Logo>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href={"/service/6963a09fb8fa5ccf60086305"} className="link link-hover">Elderly Care Service</Link>
          <Link href={"/service/6963a09fb8fa5ccf60086306"} className="link link-hover">Sick People Care Service</Link>
          <Link href={"/service/6963a09fb8fa5ccf60086304"} className="link link-hover">Baby Care Service</Link>
          
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>

          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
