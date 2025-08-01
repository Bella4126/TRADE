

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // Animation on mount
  useEffect(() => {
    setMounted(true);
    const navbar = document.querySelector('nav');
    const heroSection = document.querySelector('.hero-section');
    if (navbar && heroSection) {
      const navbarHeight = navbar.offsetHeight;
      heroSection.style.paddingTop = '${navbarHeight+20}px';

    }
  }, []);

  return (
    <section className="hero-section">
      {/* Skyline Background */}
      <div className="skyline-background">
        <div className="gradient-overlay"></div>
        {/* <video
          // src="/573262_Business_Stock_3840x2160.mp4"
          src="/3d-rendering-financial-neon-bull.jpg"
          alt="City Skyline"
          className="skyline-video"
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <img
  src="/3d-rendering-financial-neon-bull.jpg"
  alt="City Skyline"
  className="skyline-video"
/>

      </div>

      {/* Content */}
      <div className={`hero-content ${mounted ? 'content-visible' : 'content-hidden'}`}>
        <h1 className="hero-title">
          Innovative platform for <br />smart investments
        </h1>
        <p className="hero-description">
          Sign up and get 10,000 USD to your demo account to learn how to trade.
        </p>
        <div className="flex flex-col items-center mb-4 mt-16">
          <div className="bg-[#10b981] text-white py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-100 hover:translate-y-1 w-[320px] text-center">
            <Link href="/Login" className="cta-button block">
              Create a free account
            </Link>
          </div>
          <p className="minimum-deposit text-sm mt-6">
            * The minimum deposit amount to start real trading is 50 USD
          </p>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="floating-elements">
        <div className={`floating-circle circle-1 ${mounted ? 'element-visible' : 'element-hidden'}`}></div>
        <div className={`floating-circle circle-2 ${mounted ? 'element-visible' : 'element-hidden'}`}></div>
        <div className={`floating-circle circle-3 ${mounted ? 'element-visible' : 'element-hidden'}`}></div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          padding-top: 0; /* Adjust based on your navbar height */
          height: 100vh; /* Full viewport height minus navbar */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        .skyline-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%; /* Full height of hero section */
          z-index: 1;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
          z-index: 2;
        }

        .skyline-video {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures video covers area without zooming */
          object-position: center; /* Centers video */
          opacity: 1; /* Full opacity for clear visibility */
        }

        .hero-content {
          position: relative;
          z-index: 100;
          text-align: center;
          padding: 4rem 1.5rem;
          max-width: 64rem;
          margin: 1 rem  auto 0;
          transition: all 700ms ease;
        }

        .content-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .content-hidden {
          opacity: 0;
          transform: translateY(2.5rem);
        }

        .hero-title {
          font-size: clamp(1.8rem, 4.5vw, 3.25rem); /* Slightly smaller for smaller screens */
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          color: white;
        }

        .hero-description {
          font-size: clamp(0.9rem, 1.8vw, 1.15rem);
          color: #d1d5db;
          margin-bottom: 2rem;
        }

        .cta-button {
          background-color: #059669 !important;
          color: white !important;
          padding: 16px 32px !important;
          border-radius: 8px !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          display: inline-block !important;
          transition: all 300ms ease !important;
          box-shadow: 0 10px 25px -5px rgba(5, 150, 105, 0.4) !important;
          border: none !important;
          cursor: pointer !important;
          position: relative !important;
          z-index: 1000 !important;
        }

        .cta-button:hover {
          background-color: #047857 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 15px 35px -5px rgba(5, 150, 105, 0.6) !important;
        }

        .minimum-deposit {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          text-align: center;
        }

        .floating-elements {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          height: 5rem;
          pointer-events: none;
        }

        .floating-circle {
          border-radius: 50%;
          position: absolute;
          transition: opacity 1000ms ease;
        }

        .circle-1 {
          width: 3rem;
          height: 3rem;
          background-color: rgba(5, 150, 105, 0.15);
          bottom: 2.5rem;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 2rem;
          height: 2rem;
          background-color: rgba(5, 150, 105, 0.2);
          bottom: 8rem;
          left: 20%;
          animation: float 7s ease-in-out infinite 1s;
        }

        .circle-3 {
          width: 4rem;
          height: 4rem;
          background-color: rgba(5, 150, 105, 0.1);
          bottom: 5rem;
          right: 15%;
          animation: float 10s ease-in-out infinite 0.5s;
        }

        .element-visible {
          opacity: 1;
        }

        .element-hidden {
          opacity: 0;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @media (min-width: 768px) {
          .hero-content {
            padding: 4rem 1.5rem;
          }
        }

        @media (max-height: 700px) {
          .hero-title {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
          }
          .hero-description {
            font-size: clamp(0.8rem, 1.5vw, 1rem);
          }
          .hero-content {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
