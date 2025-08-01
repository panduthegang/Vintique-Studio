import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsMarquee: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Creative Director",
      company: "Design Studio Co.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "Vintique Studio transformed our brand with perfect vintage charm and modern functionality. Absolutely exceptional work!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Business Owner",
      company: "Chen Enterprises",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "The attention to detail is unmatched. They truly understand how to make vintage aesthetics work in today's world.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Bloom Agency",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "Working with Vintique Studio was a dream. They captured our vision perfectly and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Founder",
      company: "Thompson & Co.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "Their unique blend of vintage and modern design is exactly what our brand needed. Highly recommend!",
      rating: 5
    },
    {
      name: "Jessica Park",
      role: "Art Director",
      company: "Creative Minds",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "Vintique Studio's work is timeless. They created something that will look amazing for years to come.",
      rating: 5
    },
    {
      name: "Robert Johnson",
      role: "CEO",
      company: "Johnson Industries",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "Professional, creative, and delivered on time. The vintage aesthetic they created is absolutely stunning.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "Brand Manager",
      company: "Foster Brands",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "They brought our vintage-inspired vision to life with modern functionality. Couldn't be happier!",
      rating: 5
    },
    {
      name: "Carlos Martinez",
      role: "Design Lead",
      company: "Martinez Design",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "Exceptional craftsmanship and attention to detail. Vintique Studio sets the bar high for design excellence.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "Wang Innovations",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "The perfect balance of nostalgia and innovation. Their work speaks for itself - simply outstanding!",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Creative Lead",
      company: "Wilson Creative",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "Vintique Studio exceeded all expectations. Their vintage-modern approach is truly revolutionary.",
      rating: 5
    },
    {
      name: "Rachel Green",
      role: "Brand Strategist",
      company: "Green Strategy",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "They transformed our brand identity with such elegance and sophistication. Absolutely love the results!",
      rating: 5
    },
    {
      name: "Daniel Kim",
      role: "UX Director",
      company: "Kim Digital",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      review: "The most talented team I've worked with. They understand both vintage aesthetics and modern usability perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="testimonials-marquee-container">
      <div className="testimonials-marquee-wrapper">
        {/* First set of testimonials */}
        <div className="testimonials-marquee-content">
          {testimonials.map((testimonial, index) => (
            <div key={`first-${index}`} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" size={16} />
                ))}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.review}"
              </blockquote>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="testimonials-marquee-content">
          {testimonials.map((testimonial, index) => (
            <div key={`second-${index}`} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" size={16} />
                ))}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.review}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsMarquee;