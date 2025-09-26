import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import techDeveloper from "@/assets/tech-developer.jpg";

import techCollaboration from "@/assets/tech-collaboration.png";
import parkimg from "@/assets/IMAGE 2025-09-24 18:53:23.jpg";

const About = () => {
  return (
    <>
      {/* Tech Collaboration Image Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <img 
              src={techCollaboration} 
              alt="همکاری فناورانه در پارک علم و فناوری"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-black/10 to-transparent">
        <div className="container mx-auto px-4 max-w-md">
          {/* Glass Card Container */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center space-y-6">
              {/* Title */}
              <h2 className="text-2xl font-bold text-primary">
                درباره پارک
              </h2>
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                پارک علم و فناوری میزبان شرکت‌های دانش‌بنیان در 
                حوزه‌های مختلف است. هدف ما ایجاد زیرساختی 
                برای رشد نوآوری و تسهیل همکاری بین صنعت و 
                دانشگاه است. در این وب‌اپ می‌توانید درباره 
                شرکت‌ها بخوانید و برای جستجو یا مسیریابی به 
                صفحات مربوطه مراجعه کنید.
              </p>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl" style={{
            padding: '0px 0 32px 0 ',
            margin:'32px 0 40px 0 ',
            textAlign: 'center'
          }}>
            <h4  className="text-2xl font-bold text-primary p-8">راهنمای پارک</h4>
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>     <img src={parkimg} style={{
              borderRadius: '1.5rem',
              width:'80%',
              height:'300px'
            }}/></div>
       
          </div>
          {/* Buttons Below Glass Card */}
          <div className="flex gap-3 mt-6">
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-2xl text-sm font-medium shadow-lg transition-all duration-300 flex-1"
            >
              <Link to="/map">
                مشاهده نقشه
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 py-3 px-6 rounded-2xl text-sm font-medium transition-all duration-300 flex-1"
            >
              <Link to="/search">
                شروع جستجو
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;