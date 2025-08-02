import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { Star, Users, Clock, Award, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import LoadingPage from './components/LoadingPage';
import AnimatedNav from './components/AnimatedNav';
import InfiniteMarquee from './components/InfiniteMarquee';
import TestimonialsMarquee from './components/TestimonialsMarquee';
import TeamSection from './components/TeamSection';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    if (isLoading) return;

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, [isLoading]);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = (e: any) => setScrollY(e.scroll);
    lenis.on('scroll', handleScroll);
    
    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const smoothScroll = (targetId: string) => {
    if (lenis) {
      const element = document.getElementById(targetId);
      if (element) {
        lenis.scrollTo(element, { duration: 1.5 });
      }
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-vintage-cream">
      {/* Animated Navigation */}
      <AnimatedNav scrollY={scrollY} onNavigate={smoothScroll} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Vintage texture overlay */}
        <div className="absolute inset-0 opacity-3 vintage-texture z-10 pointer-events-none"></div>
        
        {/* Content Grid Layout */}
        <div className="relative z-20 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Side - Text Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-20 lg:py-0 order-1">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="vintage-frame p-8 lg:p-10 backdrop-blur-sm bg-vintage-cream/90">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-vintage-charcoal mb-6 leading-tight">
                  Where Vintage
                  <span className="block text-vintage-gold">Meets Modern</span>
                </h1>
                <p className="text-lg md:text-xl text-vintage-charcoal/80 font-body font-light mb-8 leading-relaxed">
                  Crafting timeless designs with contemporary functionality. 
                  Experience the perfect blend of nostalgic charm and cutting-edge innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => smoothScroll('services')}
                    className="vintage-button-primary group"
                  >
                    <span>Discover Our Craft</span>
                    <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-200" size={20} />
                  </button>
                  <button
                    onClick={() => smoothScroll('contact')}
                    className="vintage-button"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - 3D Model Space (visible on larger screens) */}
          <div className="relative h-96 lg:h-full order-2">
            {/* 3D Model positioned on the right side */}
            <div className="absolute inset-0 z-0">
              <Spline 
                scene="https://prod.spline.design/MZCTNuGifxbNHFbN/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <ChevronDown className="text-vintage-gold" size={24} />
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <InfiniteMarquee />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative">
        <div className="absolute inset-0 vintage-paper-texture opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-vintage-charcoal mb-4">
              Our Services
            </h2>
            <div className="vintage-divider mx-auto mb-6"></div>
            <p className="text-lg text-vintage-charcoal/70 font-body max-w-2xl mx-auto">
              Combining traditional craftsmanship with modern innovation to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-vintage-gold" size={32} />,
                title: "Premium Design",
                description: "Meticulously crafted designs that stand the test of time, blending vintage aesthetics with modern usability."
              },
              {
                icon: <Users className="text-vintage-gold" size={32} />,
                title: "Collaborative Process",
                description: "Working closely with clients to understand their vision and bring it to life with vintage-inspired creativity."
              },
              {
                icon: <Clock className="text-vintage-gold" size={32} />,
                title: "Timeless Appeal",
                description: "Creating solutions that remain relevant and beautiful for years to come, with classic design principles."
              }
            ].map((service, index) => (
              <div key={index} className="vintage-card group">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vintage-cream border-2 border-vintage-gold/20 mb-6 group-hover:border-vintage-gold/50 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-vintage-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-vintage-charcoal/70 font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Testimonials Section */}
      <section id="about" className="py-20 bg-vintage-cream relative">
        <div className="absolute inset-0 vintage-texture opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-vintage-charcoal mb-6">
                Our Story
              </h2>
              <div className="vintage-divider mb-6"></div>
              <p className="text-lg text-vintage-charcoal/80 font-body leading-relaxed mb-6">
                Founded on the principle that great design transcends time, Vintique Studio specializes 
                in creating experiences that honor the past while embracing the future. Our approach 
                combines the warmth and character of vintage aesthetics with the functionality and 
                precision of modern design.
              </p>
              <p className="text-lg text-vintage-charcoal/80 font-body leading-relaxed">
                Every project is a journey through time, where we carefully select elements from 
                different eras and seamlessly integrate them with contemporary standards to create 
                something truly unique and enduring.
              </p>
            </div>

            {/* Sample Testimonials */}
            <div className="space-y-8">
              {[
                {
                  quote: "Vintique Studio transformed our brand with a perfect balance of vintage charm and modern functionality. Absolutely exceptional work.",
                  author: "Sarah Mitchell",
                  role: "Creative Director"
                },
                {
                  quote: "The attention to detail and commitment to quality is unmatched. They truly understand how to make vintage aesthetics work in today's world.",
                  author: "David Chen",
                  role: "Business Owner"
                }
              ].map((testimonial, index) => (
                <div key={index} className="vintage-testimonial">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-vintage-gold fill-current" size={20} />
                    ))}
                  </div>
                  <blockquote className="text-vintage-charcoal/80 font-body text-lg leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-vintage-charcoal font-body">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-vintage-charcoal/60">{testimonial.role}</div>
                  </div>
                </div>
              ))}
              
              {/* View All Testimonials Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => smoothScroll('testimonials')}
                  className="vintage-button"
                >
                  View All Testimonials
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-vintage-cream relative">
        <div className="absolute inset-0 vintage-texture opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-vintage-charcoal mb-4">
              What Our Clients Say
            </h2>
            <div className="vintage-divider mx-auto mb-6"></div>
            <p className="text-lg text-vintage-charcoal/70 font-body max-w-2xl mx-auto">
              Discover why clients choose Vintique Studio for their vintage-modern design needs.
            </p>
          </div>
        </div>
        
        {/* Testimonials Marquee */}
        <TestimonialsMarquee />
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 vintage-paper-texture opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="vintage-frame p-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-vintage-charcoal mb-6">
              Ready to Create Something
              <span className="block text-vintage-gold">Timeless?</span>
            </h2>
            <p className="text-lg text-vintage-charcoal/80 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your vision to life with our unique blend of vintage inspiration 
              and modern innovation.
            </p>
            <button
              onClick={() => smoothScroll('contact')}
              className="vintage-button-primary"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="py-20 bg-vintage-charcoal text-vintage-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-vintage-gold mr-3" size={20} />
                  <span className="font-body">hello@vintiquestudio.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-vintage-gold mr-3" size={20} />
                  <span className="font-body">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-vintage-gold mr-3" size={20} />
                  <span className="font-body">123 Design Street, Creative City</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Services</h3>
              <ul className="space-y-2 font-body">
                <li className="hover:text-vintage-gold transition-colors duration-200 cursor-pointer">Brand Design</li>
                <li className="hover:text-vintage-gold transition-colors duration-200 cursor-pointer">Web Development</li>
                <li className="hover:text-vintage-gold transition-colors duration-200 cursor-pointer">Print Design</li>
                <li className="hover:text-vintage-gold transition-colors duration-200 cursor-pointer">Consultation</li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Vintique Studio</h3>
              <p className="font-body text-vintage-cream/80 leading-relaxed">
                Crafting timeless designs that bridge the gap between vintage charm and modern functionality. 
                Every project is a unique journey through time and style.
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-vintage-cream/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-display font-bold mb-4 md:mb-0">
                Vintique Studio
              </div>
              <div className="font-body text-vintage-cream/60">
                © 2025 Vintique Studio. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;