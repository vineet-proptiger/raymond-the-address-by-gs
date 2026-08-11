'use client'
import { MapPin } from 'lucide-react'
import { locationImage } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationLandmarks = [
  { name: 'Eastern Expressway', dist: '3 mins' },
  { name: 'Monorail Station', dist: '3 mins' },
  { name: 'K.J. Somaiya Hospital & Research Center', dist: '5 mins' },
  { name: 'Atal Setu', dist: '7 mins' },
  { name: 'BKC', dist: '10 mins' },
  { name: 'Ryan International School', dist: '15 mins' },
  { name: 'Jio World Convention Centre', dist: '15 mins' },
  { name: 'Dhirubhai Ambani International School', dist: '16 mins' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '72px 0',
      backgroundImage: "url('/images/highlights/highlight.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '50px', textAlign: 'center' }} data-aos="fade-down" data-aos-duration="1000">
           <h2
             className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#d3be8a]"
             style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '12px' }}
           >
             LOCATION ADVANTAGES
           </h2>
           {/* Decorative Line */}
           <div className="flex items-center justify-center mt-3 mb-2">
             <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
             <div className="w-2 h-2 rounded-full bg-[#7d9b93] mx-3"></div>
             <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* RIGHT — Clean Landmarks List (Replaced Accordion) */}
          <div className="w-full lg:w-[46%] lg:order-2" data-aos="fade-left" data-aos-duration="1000">
            <div style={{
              padding: '16px 26px',
              borderRadius: '16px',
              background: '#f8f2ec',
              border: '1px solid #d5bd7e',
              boxShadow: '0 12px 32px rgba(0, 2, 66, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}>
              <h3 style={{
                fontFamily: F_JOST,
                fontSize: '19px',
                fontWeight: '600',
                color: '#000242',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                paddingBottom: '10px',
                borderBottom: '2px solid #d5bd7e',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <MapPin size={22} className="text-[#005a50]" />
                <span>SEAMLESS CONNECTIVITY</span>
              </h3>

              <div className="flex flex-col">
                {locationLandmarks.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 4px',
                      borderBottom: index === locationLandmarks.length - 1 ? 'none' : '1px solid rgba(213, 189, 126, 0.45)',
                      fontFamily: F_SANS,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '2px',
                        background: '#005a50',
                        display: 'inline-block',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: '15px',
                        color: '#000242',
                        fontWeight: '500',
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '15px',
                      color: '#000242',
                      fontWeight: '700',
                      fontFamily: F_JOST,
                      whiteSpace: 'nowrap',
                      marginLeft: '16px',
                    }}>
                      {item.dist}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LEFT — Location Aerial Map Image */}
          <div className="w-full lg:flex-1 lg:order-1 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1000">
            <div style={{
              overflow: 'hidden',
              border: '1px solid #D5C2A8',
              borderRadius: '16px',
              width: '100%',
              height: '100%',
              position: 'relative',
              background: '#0a0f1d',
              boxShadow: '0 12px 32px rgba(0, 2, 66, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.510654828106!2d72.8743149!3d19.0412729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90041044185%3A0x87b7927e3025cb1f!2sThe%20Address%20By%20GS%20-%20Wadala!5e0!3m2!1sen!2sin!4v1786432775430!5m2!1sen!2sin" 
                className="w-full h-[400px] sm:h-[460px] lg:h-full min-h-[400px]" 
                style={{ width: '100%', border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Raymond The Address By GS Location"
              />
              <div style={{
                position: 'absolute', top: '16px', right: '16px', zIndex: 10,
                background: 'var(--color-gold, #c9a96e)', opacity: 0.95, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
                pointerEvents: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '12px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Wadala, Mumbai
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
