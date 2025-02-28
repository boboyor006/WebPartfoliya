
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  delay?: string;
}

const Section = ({ id, title, children, delay = "delay-100" }: SectionProps) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className={`section-title ${delay}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
