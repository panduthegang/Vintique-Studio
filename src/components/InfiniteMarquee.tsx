import React from 'react';
import { Star, Award, Users, Clock, Palette, Sparkles, Heart, Trophy } from 'lucide-react';

const InfiniteMarquee: React.FC = () => {
  const marqueeItems = [
    { icon: <Star size={28} />, text: "Premium Design" },
    { icon: <Award size={28} />, text: "Award Winning" },
    { icon: <Users size={28} />, text: "Client Focused" },
    { icon: <Clock size={28} />, text: "Timeless Appeal" },
    { icon: <Palette size={28} />, text: "Creative Excellence" },
    { icon: <Sparkles size={28} />, text: "Vintage Charm" },
    { icon: <Heart size={28} />, text: "Crafted with Love" },
    { icon: <Trophy size={28} />, text: "Industry Leader" },
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        {/* First set of items */}
        <div className="marquee-content">
          {marqueeItems.map((item, index) => (
            <div key={`first-${index}`} className="marquee-item">
              <div className="marquee-icon">
                {item.icon}
              </div>
              <span className="marquee-text">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="marquee-content">
          {marqueeItems.map((item, index) => (
            <div key={`second-${index}`} className="marquee-item">
              <div className="marquee-icon">
                {item.icon}
              </div>
              <span className="marquee-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;