




import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessTeamMeeting from "@/assets/business-team-meeting.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6" dir="rtl">
            <style>{`
.glass-card{






  clip-path: path("M 30,160 L 130,160 A 15,15 0,0,0 145,175 L 145,185 A 15,15 0,0,1 160,200 L 270,200 A 15,15 0,0,0 285,185 L 285,15 A 15,15 0,0,1 270,0 L 30,0 A 15,15 0,0,0 15,15 L 15,145 A 15,15 0,0,0 30,160 Z");




background:red;
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
            <h1 className="text-xl font-bold leading-tight whitespace-nowrap">
              جستجو و مسیریابی در{" "}
              <span className="text-blue-400 " >پارک علم</span>
              <br />
              <span className="text-blue-300">و فناوری</span>
            </h1>

            {/* توضیح */}
            <p className=" text-center text-sm leading-relaxed text-gray-200">
              معرفی شرکت‌ها، دستاوردها و رویدادهای پارک علم و فناوری.
              برای جستجو و مسیریابی از دکمه‌های زیر استفاده کنید.
            </p>

            {/* دکمه‌ها (ترتیب و استایل مطابق تصویر) */}
  
          </div>
          
        </div>
        <div className="flex items-center justify-end gap-2 pt-2">
              {/* 1) مشاهده نقشه - آبی */}
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-3 py-1.5 text-xs font-semibold shadow-md"
              >
                <Link to="/map">مشاهده نقشه</Link>
              </Button>

              {/* 2) شروع جستجو - مشکی با متن سفید و حاشیه سفید */}
              <Button
                asChild
                className="bg-black text-white border border-white hover:bg-black/90 rounded-xl px-3 py-1.5 text-xs font-semibold shadow-md"
              >
                <Link to="/search">شروع جستجو</Link>
              </Button>
            </div>
      </div>
    </section>

  );

};

export default Hero;

