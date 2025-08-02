import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: '01',
    name: 'Harsh Rathod',
    role: 'Team Lead Developer',
    about: 'Experienced in developing scalable web applications with modern technologies. Passionate about clean code and innovative solutions.',
    avatar: '/Harsh.jpg',
    github: 'https://github.com/panduthegang',
    linkedin: 'https://linkedin.com/in/harshrathod',
    email: 'mailto:harshsrathod959@gmail.com0'
  },
  {
    id: '02',
    name: 'Saachi Desai',
    role: 'UI/UX Designer',
    about: 'Passionate about crafting user-friendly designs that combine aesthetics with functionality. Specialist in design systems and user research.',
    avatar: '/Saachi.jpg',
    github: 'https://github.com/saachidesai09',
    linkedin: 'https://linkedin.com/in/saachidesai',
    email: 'mailto:saachi09@gmail.com'
  },
  
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white relative">
      <div className="absolute inset-0 vintage-paper-texture opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-vintage-charcoal mb-4">
            Meet the Team
          </h2>
          <div className="vintage-divider mx-auto mb-6"></div>
          <p className="text-lg text-vintage-charcoal/70 font-body max-w-2xl mx-auto">
            The creative minds behind our vintage-modern design philosophy.
          </p>
        </div>
        
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-item">
              {/* Vertical List Item */}
              <div className="team-member-name">
                <span className="member-number">{member.id}.</span>
                <span className="member-info">
                  <span className="name">{member.name}</span>
                  <span className="role">– {member.role}</span>
                </span>
              </div>
              
              {/* Floating Dialog Card */}
              <div className="team-member-dialog">
                <div className="dialog-content">
                  {/* Profile Image */}
                  <div className="profile-image-container">
                    <img 
                      src={member.avatar} 
                      alt={`${member.name}'s profile`} 
                      className="profile-image"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <div className="member-details">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-about">{member.about}</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="social-links">
                    <a 
                      href={member.github} 
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={member.linkedin} 
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={member.email} 
                      className="social-link"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

