import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessTeamMeeting from "@/assets/business-team-meeting.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6" dir="rtl">
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
        <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-3xl p-6 shadow-2xl">
          <div className="text-center text-white space-y-4">
            {/* تیتر با رنگ‌بندی و شکست خط مثل عکس */}
            <h1 className="text-xl font-bold leading-tight">
              جستجو و مسیریابی در{" "}
              <span className="text-blue-400">پارک علم</span>
              <br />
              <span className="text-blue-300">و فناوری</span>
            </h1>

            {/* توضیح */}
            <p className="text-sm leading-relaxed text-gray-200">
              معرفی شرکت‌ها، دستاوردها و رویدادهای پارک علم و فناوری.
              برای جستجو و مسیریابی از دکمه‌های زیر استفاده کنید.
            </p>

            {/* دکمه‌ها (ترتیب و استایل مطابق تصویر) */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {/* 1) مشاهده نقشه - آبی */}
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 text-sm font-semibold shadow-md"
              >
                <Link to="/map">مشاهده نقشه</Link>
              </Button>

              {/* 2) شروع جستجو - مشکی با متن سفید و حاشیه سفید */}
              <Button
                asChild
                className="bg-black text-white border border-white hover:bg-black/90 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-md"
              >
                <Link to="/search">شروع جستجو</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;