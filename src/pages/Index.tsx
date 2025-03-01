
import { useEffect } from 'react';
import { Github, Mail, MessageCircle, Instagram, MapPin, Heart, Activity, CalendarClock, ShieldCheck } from 'lucide-react';
import SocialCard from '@/components/SocialCard';
import Section from '@/components/Section';
import DentalChart from '@/components/DentalChart';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-title, .opacity-0').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 flex flex-col items-center justify-center text-center">
        <div className="container">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 opacity-0 animate-fade-in">
            <img 
              src="/lovable-uploads/328d618c-331b-4d2c-b75e-d76e59c74512.jpg" 
              alt="Dr. Sarah Johnson" 
              className="profile-img w-full h-full"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-800 opacity-0 animate-fade-in delay-100">
          Tursunaliyev Ziloldin
          </h1>
          
          <div className="location-badge opacity-0 animate-fade-in delay-200">
            <MapPin size={16} />
            <span>Farg'ona viloyati </span>
          </div>
          
          <p className="text-lg text-slate-600 max-w-xl mx-auto mt-4 opacity-0 animate-fade-in delay-300">
          💎 Tajribali va professional yuz-jag’ jarrohi
          Tursunaliev Ziloldin – estetik va rekonstruktiv jarrohlik sohasida yetakchi mutaxassislardan biri. 
          Yuqori aniqlik va zamonaviy texnologiyalar yordamida yuz va jag’ sohasidagi muammolarni bartaraf etishga ixtisoslashgan.
          </p>
        </div>
      </div>
      
      {/* About Section */}
      <Section id="about" title="👨🏻‍💻 Biz haqimizda ">
        <div className="max-w-2xl mx-auto text-center opacity-0 animate-fade-in delay-200">
          <p className="text-slate-600 mb-4">
          Bizning maqsadimiz – shogirdlarimizni natijaga yo‘naltirish va ularga eng yuqori 
          sifatli bilim berish. Tajribali yondashuv, zamonaviy usullar va doimiy qo‘llab-quvvatlash 
          orqali biz shogirdlarimizning maqsadlariga tezroq erishishlariga yordam beramiz.

          </p>
          <p className="text-slate-600">
          🎯 Natijaga yo‘naltirilgan ta’lim – bizning ustuvor maqsadimiz!
          </p>
        </div>
      </Section>
      
      {/* Services Section */}
      <Section id="services" title="Bo'limalar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="👨🏻‍⚕️ Yuz Jaroxligi"
            description="Tursunaliyev Ziloldin "
            icon={<Heart size={24} />}
            delay="delay-100"
          />
          <ServiceCard
            title="Xirur "
            description="Tursunaliyev Ziloldin "
            icon={<Activity size={24} />}
            delay="delay-200"
          />
          <ServiceCard
            title="Xafsizlik "
            description="kafolatlanadi va Tursunaliyev Ziloldin tamonidan   "
            icon={<ShieldCheck size={24} />}
            delay="delay-300"
          />
          <ServiceCard
            title="Bosh bolganlar sanalar "
            description="Yakshanba kunlar soat 10:00dan 15:00gacha "
            icon={<CalendarClock size={24} />}
            delay="delay-400"
          />
        </div>
      </Section>
      
      {/* Statistics Section */}
      <Section id="statistics" title="Natijlar ">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-center mb-6 opacity-0 animate-fade-in">
            Biznig xozigi natijlar (2024-yildan boshlab)
          </h3>
          <DentalChart />
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section id="contact" title="Biz billan bog'lanish ">
        <div className="space-y-4">
       
          <SocialCard 
            icon={<MessageCircle size={24} />} 
            text="TELEGRAM" 
            link="https://t.me/POLATOVBLOG" 
            bgColor="bg-social-telegram"
            delay="delay-200"
          />
          <SocialCard 
            icon={<Mail size={24} />} 
            text="EMAIL" 
            link="polatovt033@gmail.com" 
            bgColor="bg-social-email"
            delay="delay-300"
          />
          <SocialCard 
            icon={<Instagram size={24} />} 
            text="INSTAGRAM" 
            link="https://www.instagram.com/ermatov.w/" 
            bgColor="bg-social-instagram"
            delay="delay-400"
          />
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500">
        <div className="container">
          <p>© {new Date().getFullYear()} Tursunaliyev Ziloldin</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
