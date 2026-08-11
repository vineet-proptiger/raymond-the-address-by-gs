'use client'
import React from 'react'
import Image from 'next/image'

const Projects = ({ setIsOpen }) => {
  return (
    <section id="projects" className="projects-section">
      <style jsx>{`
        .projects-section {
          box-sizing: border-box;
          padding: 80px 0px;
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }
        .heading {
          color: #000242;
          font-family: "Montserrat", sans-serif;
          font-size: 46px;
          font-weight: 600;
          line-height: 56px;
          text-transform: uppercase;
          letter-spacing: .03em;
          margin-bottom: 15px;
          text-align: center;
        }
        .subheading {
          color: #71717a;
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          text-align: center;
          margin-bottom: 60px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        .project-card-wrap {
          display: flex;
          align-items: stretch;
          margin-bottom: 60px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 2, 66, 0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .project-card-wrap:hover {
          box-shadow: 0 25px 60px rgba(0, 2, 66, 0.12);
          transform: translateY(-5px);
        }
        .project-img-container {
          position: relative;
          overflow: hidden;
          background: #000242;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .project-img {
          width: 100% !important;
          height: 100% !important;
          flex: 1 1 0%;
          object-fit: cover !important;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
        }
        .project-card-wrap:hover .project-img {
          transform: scale(1.07);
        }
        .project-content-box {
          background: #f8f7fd;
          padding: 50px 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(0, 2, 66, 0.04);
          position: relative;
        }
        .project-title {
          color: #000242;
          font-family: "Montserrat", sans-serif;
          font-size: 26px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .04em;
          margin-bottom: 20px;
          position: relative;
        }
        .project-desc {
          color: #334155;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 35px;
          text-align: justify;
        }
        .explore-btn {
          padding: 13px 32px;
          background: #ffffff;
          color: #000242;
          border: 2px solid #000242;
          line-height: 1;
          position: relative;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          letter-spacing: 1.5px;
          transition: all 0.35s ease;
          cursor: pointer;
          width: fit-content;
          border-radius: 4px;
        }
        .explore-btn:hover {
          background: #000242;
          color: #d3be8a;
          border-color: #000242;
          box-shadow: 0 8px 20px rgba(0, 2, 66, 0.25);
          transform: translateY(-2px);
        }
        @media (max-width: 991px) {
          .heading {
            font-size: 32px;
            line-height: 40px;
          }
          .subheading {
            font-size: 15px;
            margin-bottom: 40px;
          }
          .project-content-box {
            padding: 35px 25px;
          }
          .project-title {
            font-size: 22px;
          }
          .project-img-container {
            min-height: auto;
            aspect-ratio: 16 / 10;
            width: 100%;
            display: flex;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900 text-center" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>PROJECTS</h2>
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-2 mb-4">
            <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
            <div className="w-2 h-2 rounded-full bg-[#7d9b93] mx-3"></div>
            <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
          </div>
          {/* <p className="subheading">
            Designed for Elevated Living <span className="text-[#d3be8a] mx-2 font-bold">•</span> Where nature meets modern comfort
          </p> */}
        </div>

        {/* Project 1: Raymond The Address By GS Residential */}
        <div className="project-card-wrap flex flex-col lg:flex-row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          {/* Image Side (Left on Desktop) */}
          <div className="w-full lg:w-1/2 project-img-container">
            <Image
              src="/projects/daffodils-tower.jpg"
              alt="Raymond The Address By GS - Residential Towers"
              width={700}
              height={550}
              className="project-img"
              priority={true}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          {/* Text Side (Right on Desktop) */}
          <div className="w-full lg:w-1/2 project-content-box">
            <h3 className="project-title">RAYMOND THE ADDRESS BY GS - RESIDENTIAL</h3>
            <p className="project-desc">
              The residential cluster of Raymond The Address By GS in Wadala, Mumbai offers spacious 2 &amp; 3 BHK hillside apartments with extensive decks. Designed for elegant living with breathtaking verdant views of surrounding greenery and hills, each residence is crafted with branded fitments and smart layouts. Residents enjoy access to a chlorine-free swimming pool, clubhouse, gym, and landscaped gardens.
            </p>
            <button
              className="explore-btn"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              EXPLORE
            </button>
          </div>
        </div>

        {/* Project 2: Raymond The Address By GS Commercial & Retail Plaza */}
        <div className="project-card-wrap flex flex-col lg:flex-row-reverse mb-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {/* Image Side (Right on Desktop) */}
          <div className="w-full lg:w-1/2 project-img-container">
            <Image
              src="/projects/iris-tower.jpg"
              alt="Raymond The Address By GS - Commercial & Retail Plaza"
              width={700}
              height={550}
              className="project-img"
              priority={true}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          {/* Text Side (Left on Desktop) */}
          <div className="w-full lg:w-1/2 project-content-box">
            <h3 className="project-title">RAYMOND THE ADDRESS BY GS &amp; COMMERCIAL PLAZA</h3>
            <p className="project-desc">
              Complementing the hillside residences is the thriving retail and commercial sector of Raymond The Address By GS, offering office spaces and a lively shopping plaza. Thoughtfully developed across 145 sprawling acres as an integrated township, it exemplifies urban convenience and nature-inspired living with grand entrance lobbies, multi-level parking, everyday conveniences, and seamless connectivity.
            </p>
            <button
              className="explore-btn"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              EXPLORE
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
