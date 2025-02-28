
import { ReactNode } from 'react';

interface SocialCardProps {
  icon: ReactNode;
  text: string;
  link: string;
  bgColor: string;
  delay: string;
}

const SocialCard = ({ icon, text, link, bgColor, delay }: SocialCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`social-card opacity-0 animate-fade-in ${delay}`}
    >
      <div className={`social-card-icon ${bgColor}`}>
        {icon}
      </div>
      <div className="social-card-content">
        {text}
      </div>
    </a>
  );
};

export default SocialCard;
