'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #f4ebe4;
        overflow: hidden;
      }
      .logoicon {
        width: 25%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.15;
        z-index: 0;
        pointer-events: none;
      }
      .icon_logo_anim {
        animation: logoAnim 20s linear infinite;
        width: 100%;
        height: auto;
      }
      @keyframes logoAnim {
        100% {
          transform: rotate(360deg);
        }
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .heading {
        color: #000242;
        font-family: "Montserrat", sans-serif;
        font-size: 46px;
        font-weight: 500;
        line-height: 56px;
        text-transform: uppercase;
        letter-spacing: .02em;
        margin-bottom: 30px;
      }
      .about-us-section p {
        text-align: left;
        margin-bottom: 25px;
        color: #000242;
        font-family: "Poppins", sans-serif;
        font-size: 17px;
        line-height: 1.8;
      }
      .about-us-section p.boldp {
        margin-top: 35px;
        font-weight: 500;
        font-size: 19px;
        margin-bottom: 25px;
      }
      .about-us-section ul {
        padding-left: 0;
        list-style-type: none;
        margin-bottom: 45px;
        color: #000242;
        font-family: "Poppins", sans-serif;
        font-size: 17px;
        line-height: 1.8;
      }
      .about-us-section ul li {
        position: relative;
        padding-left: 24px;
        margin-bottom: 14px;
      }
      .about-us-section ul li:before {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        width: 6px;
        height: 6px;
        background-color: #000242;
        border-radius: 50%;
      }
      .theme_btn1 {
        padding: 15px 32px;
        background: #000242;
        color: #FFF;
        line-height: 1;
        position: relative;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        display: inline-block;
        font-size: 15px;
        transition: all 0.3s ease;
        cursor: pointer;
        letter-spacing: 0.5px;
      }
      .theme_btn1:hover {
        background: #d3be8a;
        color: #000242;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
        .heading {
          font-size: 32px;
          line-height: 40px;
        }
        .logoicon {
          width: 50%;
        }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-7/12 pr-0 lg:pr-8">
          <div className="inner-section" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>Overview</h2>
            {/* Decorative Line */}
            <div className="flex items-center justify-start mt-2 mb-6" data-aos="fade-up" data-aos-duration="1000">
              <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
              <div className="w-2 h-2 rounded-full bg-[#7d9b93] mx-3"></div>
              <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
            </div>
            
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" style={{
              fontSize: '16px',
              fontFamily: '"Poppins", sans-serif',
              color: '#333',
              textAlign: 'justify',
              lineHeight: '1.8',
              marginBottom: '24px',
              transition: 'all 0.3s ease'
            }}>
              Raymond The Address by Raymond Realty at GS redefines refined urban living with a striking blend of European-inspired architecture and timeless Art Deco elegance. Spread across 8 acres, Raymond The Address features an iconic tower offering intelligently designed 2 &amp; 3 BHK homes crafted for modern lifestyles. At Raymond The Address residents enjoy a premium mix of comfort and sophistication, with amenities that elevate everyday living.
              {!isExpanded ? (
                <>
                  <span>... </span>
                  <span
                    onClick={() => setIsExpanded(true)}
                    className="text-[#000242] font-bold text-[15px] cursor-pointer hover:text-[#C9A96E] hover:underline inline-flex items-center ml-1 whitespace-nowrap transition-colors duration-200"
                  >
                    Read More ▼
                  </span>
                </>
              ) : (
                <>
                  <span> Raymond The Address offers a luxurious swimming pool, a fully equipped gymnasium, a vibrant kids&apos; play area, an elegant grand lobby, and engaging indoor games spaces. Life at Raymond The Address encourages wellness, leisure, and balance for people of all ages. Beyond homes, Raymond The Address nurtures a close-knit community through thoughtfully planned social spaces that promote connection while preserving privacy. Ideally located in the heart of the city, Raymond The Address offers seamless connectivity to business hubs, lifestyle destinations, and daily essentials, making it a complete address for elevated city living. </span>
                  <span
                    onClick={() => setIsExpanded(false)}
                    className="text-[#000242] font-bold text-[15px] cursor-pointer hover:text-[#C9A96E] hover:underline inline-flex items-center ml-1 whitespace-nowrap transition-colors duration-200"
                  >
                    Read Less ▲
                  </span>
                </>
              )}
            </p>
            

            
            {/* Info Boxes */}
            <div 
              className="flex flex-col md:flex-row border border-[#d3be8a] rounded-xl overflow-hidden w-full shadow-sm" 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay="200"
            >
              <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#d3be8a] flex flex-col justify-center bg-[#fdfbf7]" style={{ padding: '16px 24px' }}>
                <p style={{ color: '#7a7a7a', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>Land Parcel</p>
                <h3 style={{ color: '#000242', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.4' }}>5.62 Acres</h3>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#fdfbf7]" style={{ padding: '16px 24px' }}>
                <p style={{ color: '#7a7a7a', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>Floors</p>
                <h3 style={{ color: '#000242', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.4' }}>G + 31 Storey</h3>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-5/12 mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative">
            <img 
              src={overviewImage} 
              alt="Raymond The Address By GS Overview" 
              className="w-[85%] lg:w-[75%] h-auto rounded-xl shadow-2xl max-w-[450px] mx-auto object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview
