




import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessTeamMeeting from "@/assets/business-team-meeting.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6" dir="rtl">
            <style>{`
.glass-card{



    clip-path: path("M 15 0 L 270 0 A 15 15 0 0 1 285 15 L 285 180 A 15 15 0 0 1 275 195 L 240 195 A 15 15 0 0 1 226 182 L 225 175 A 16 15 0 0 0 210 160 L 15 160 A 15 15 0 0 1 0 145 L 0 15 A 15 15 0 0 1 15 0 Z");
padding:12.5px 20px 55px 0;

}      `}</style>
      {/* پس‌زمینه */}
      <div className="absolute inset-0">
        <img
          src={businessTeamMeeting}
          alt="پارک علم و فناوری - جلسه کاری تیم"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* کارت شیشه‌ای (کپی برابر اصل) */}
      <div className="relative z-10 w-full max-w-[18rem]"> {/* ~288px مثل طرح */}
        <div 
        className=" glass-card relative backdrop-blur-md bg-black/20  p-6 shadow-2xl ">
          <div className=" text-white space-y-4">
            {/* تیتر با رنگ‌بندی و شکست خط مثل عکس */}
            <h1 style={{
              fontSize:'18px'
            }} className="text-xl font-bold leading-tight whitespace-nowrap">
              جستجو و مسیریابی در{" "}
              <span className="text-blue-400 " >پارک علم</span>
              <br />
              <span className="text-blue-300">و فناوری</span>
            </h1>

            {/* توضیح */}
            <p style={{
              fontSize:'14px'
            }} className=" text-start text-sm leading-relaxed text-gray-200">
              معرفی شرکت‌ها، دستاوردها و رویدادهای پارک علم و فناوری.
              برای جستجو و مسیریابی از دکمه‌های زیر استفاده کنید.
            </p>

            {/* دکمه‌ها (ترتیب و استایل مطابق تصویر) */}
  
          </div>
          
        </div>
        <div style={{
          position: 'absolute',
          left: '2%',
          top: '79%',
       
        }} className="flex items-center justify-end gap-2 pt-2">
              {/* 1) مشاهده نقشه - آبی */}
              <Button
              style={{
                width: '100px',
                height: '35px',
                 fontSize: '12px',

              }}
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md"
              >
                <Link to="/map">مشاهده نقشه</Link>
              </Button>

              {/* 2) شروع جستجو - مشکی با متن سفید و حاشیه سفید */}
              <Button
                   style={{
                    width: '100px',
                    height: '35px',
                     fontSize: '12px',
    
                  }}
                asChild
                className="bg-black text-white border border-white hover:bg-black/90 rounded-xl  font-semibold shadow-md"
              >
                <Link to="/search">شروع جستجو</Link>
              </Button>
            </div>
      </div>
    </section>

  );

};

export default Hero;

