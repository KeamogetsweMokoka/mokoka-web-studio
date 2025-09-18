// import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import About from './components/about';
import Services from './components/services';
import Pricing from './components/pricing';
import Contact from './components/contact'; 


function App() {
  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Pricing />
      <Contact />
      
      <style jsx>{`
        /* Global Reset */
        * {
          padding: 0;
          box-sizing: border-box;
        }

        /* Body Styling */
        body {
          background-color: #7d7d7d;
          color: white;
          font-family: "Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif";
          margin: 0;
        }

        /* Navbar */
        .navbar { 
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 1rem 2rem;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          z-index: 1000;
        }

        .logo {
          background: none;
          font-size: 1.5rem;
          font-weight: bold;
        }

        /* Navigation Links - Desktop */
        .nav-links {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
          position: static;
          flex-direction: row;
          background: none;
          border: none;
          transform: none;
          opacity: 1;
          visibility: visible;
          transition: none;
        }

        .nav-links li {
          background: none;
          width: auto;
          text-align: left;
          padding: 0;
          border-bottom: none;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: #f1c40f;
        }

        /* Hamburger Menu */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: white;
          transition: 0.3s;
          transform-origin: center;
        }

        .hamburger-active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger-active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        /* About Section */
        .about {
          padding: 4rem 2rem;
        }

        .about-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        /* Text */
        .about-text {
          flex: 1 1 400px;
          max-width: 600px;
        }

        .about-text h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .about-text p {
          margin-bottom: 1rem;
          line-height: 1.6;
          font-size: 1rem;
        }

        /* Image */
        .about-image {
          flex: 1 1 300px;
          max-width: 500px;
        }

        .about-image img {
          width: 100%;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Services Section */
        .services {
          padding: 4rem 2rem;
          text-align: center;
        }

        .services-title {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        /* Container */
        .services-container {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        /* Card */
        .service-card {
          flex: 1 1 300px;
          max-width: 320px;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .image-container img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .text-container h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }

        .text-container p {
          font-size: 1rem;
          line-height: 1.5;
        }

        /* Pricing Section */
        .pricing {
          padding: 4rem 2rem;
          text-align: center;
        }

        .pricing-title {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        /* Container */
        .pricing-container {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        /* Card */
        .pricing-card {
          flex: 1 1 250px;
          max-width: 320px;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        /* Featured monthly plan */
        .featured {
          border: 2px solid #f1c40f;
        }

        /* Text */
        .plan-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .plan-price {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #f1c40f;
        }

        .plan-description {
          font-size: 1rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        /* Features */
        .plan-features {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .plan-features li {
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
        }

        .plan-features li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #f1c40f;
        }

        /* Button */
        .plan-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          background-color: #f1c40f;
          color: black;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .plan-btn:hover {
          background-color: #d4ac0d;
          transform: translateY(-3px);
        }

        /* Contact Section */
        .contact {
          padding: 4rem 2rem;
          text-align: center;
        }

        .contact-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .contact-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        /* Contact Form */
        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 2rem;
          text-align: left;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border-radius: 8px;
          border: none;
          outline: none;
          background-color: rgba(255, 255, 255, 0.15);
          color: white;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        /* Button */
        .contact-btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          background-color: #f1c40f;
          color: black;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .contact-btn:hover {
          background-color: #d4ac0d;
          transform: translateY(-3px);
        }

        /* RESPONSIVE DESIGN */
        
        /* Tablets (768px and down) */
        @media screen and (max-width: 768px) {
          .navbar {
            padding: 1rem;
            border-radius: 8px;
          }
          
          .logo {
            font-size: 1.25rem;
          }
          
          .hamburger {
            display: flex;
          }
          
          /* Mobile Navigation Dropdown */
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #9e9e9e;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0 0 12px 12px;
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            margin: 0;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .nav-links-mobile {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-links li {
            width: 100%;
            text-align: center;
            padding: 0.75rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .nav-links li:last-child {
            border-bottom: none;
          }
          
          .about {
            padding: 3rem 1rem;
          }
          
          .about-container {
            gap: 2rem;
          }
          
          .about-text h2 {
            font-size: 1.75rem;
            text-align: center;
          }
          
          .services {
            padding: 3rem 1rem;
          }
          
          .services-title {
            font-size: 1.75rem;
          }
          
          .services-container {
            gap: 1.5rem;
          }
          
          .pricing {
            padding: 3rem 1rem;
          }
          
          .pricing-title {
            font-size: 1.75rem;
          }
          
          .pricing-container {
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .contact {
            padding: 3rem 1rem;
          }
          
          .contact-title {
            font-size: 1.75rem;
          }
          
          .contact-form {
            padding: 1.5rem;
          }
        }
        
        /* Mobile Phones (480px and down) */
        @media screen and (max-width: 480px) {
          .navbar {
            padding: 0.75rem;
            margin: 0.5rem;
            border-radius: 8px;
          }
          
          .logo {
            font-size: 1.1rem;
          }
          
          .nav-links li {
            padding: 1rem 1.5rem;
          }
          
          .about {
            padding: 2rem 1rem;
          }
          
          .about-text {
            text-align: center;
          }
          
          .about-text h2 {
            font-size: 1.5rem;
          }
          
          .about-text p {
            font-size: 0.95rem;
          }
          
          .services {
            padding: 2rem 1rem;
          }
          
          .services-title {
            font-size: 1.5rem;
          }
          
          .service-card {
            flex: 1 1 280px;
            padding: 1.25rem;
          }
          
          .pricing {
            padding: 2rem 1rem;
          }
          
          .pricing-title {
            font-size: 1.5rem;
          }
          
          .pricing-card {
            flex: 1 1 280px;
            padding: 1.5rem;
          }
          
          .plan-title {
            font-size: 1.25rem;
          }
          
          .contact {
            padding: 2rem 1rem;
          }
          
          .contact-title {
            font-size: 1.5rem;
          }
          
          .contact-form {
            padding: 1.25rem;
          }
          
          .form-group input,
          .form-group textarea {
            padding: 0.6rem;
            font-size: 0.95rem;
          }
        }
        
        /* Large Screens (1200px and up) */
        @media screen and (min-width: 1200px) {
          .about-container,
          .services-container,
          .pricing-container {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .navbar {
            max-width: 1200px;
            margin: 0 auto;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
        }
        
        /* Extra Large Screens (1600px and up) */
        @media screen and (min-width: 1600px) {
          .about-container,
          .services-container,
          .pricing-container {
            max-width: 1400px;
          }
          
          .navbar {
            max-width: 1400px;
          }
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export default App;