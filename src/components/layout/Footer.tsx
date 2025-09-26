import logoGolden from "@/assets/logo-golden.png";
import repeateMusicIcon from "@/assets/repeate-music-icon.png";
import mapIcon from "@/assets/map-icon.png";

const Footer = () => {
  return (
    <footer
      className="relative p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0B2A55] via-[#0C2F63] to-[#0A1830] text-white"
      dir="rtl"
    >
      <div className="mx-auto w-full max-w-md">
        {/* کارت اصلی داخلی */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0E2953] to-[#0B1E3E] shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-5 sm:p-6">
          {/* آدرس */}
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <img src={mapIcon} alt="" className="h-3.5 w-3.5 object-contain opacity-90" />
              </span>
              <h4 className="text-sm sm:text-base font-medium">آدرس</h4>
            </div>
            <p className="text-[13px] sm:text-sm leading-6 text-blue-100/85">
              آدرس: خیابون دانشگاه، ساعات کاری: صبح؛ ۶صبح تا ۸شب
            </p>
          </section>

          {/* لینک های مهم */}
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <img src={repeateMusicIcon} alt="" className="h-3.5 w-3.5 object-contain opacity-90" />
              </span>
              <h4 className="text-sm sm:text-base font-medium">لینک های مهم</h4>
            </div>
            <ul className="space-y-2 text-[15px] sm:text-base">
              <li className="text-white/90 hover:text-white hover:underline transition-colors cursor-pointer">خانه</li>
              <li className="text-white/90 hover:text-white hover:underline transition-colors cursor-pointer">نقشه</li>
              <li className="text-white/90 hover:text-white hover:underline transition-colors cursor-pointer">جستجو</li>
              <li className="text-white/90 hover:text-white hover:underline transition-colors cursor-pointer">جزئیات شرکت</li>
            </ul>
          </section>

          {/* کارت پایین (Pill) */}
          <div className="mt-8 rounded-2xl bg-gradient-to-b from-[#142D5B] to-[#0F254A] ring-1 ring-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.3)] px-5 py-4">
            {/* لوگو + عنوان راست‌چین */}
            <div className="flex items-center justify-start gap-2" dir="rtl">
              <img
                src={logoGolden}
                alt="پارک علم و فناوری"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
              />
              <h3 className="text-sm sm:text-base font-medium text-white/95">
                پارک علم و فناوری
              </h3>
            </div>

            {/* جداکننده ظریف */}
            <div className="mt-3 h-px w-full bg-white/10" />

            {/* ردیف اطلاعات تماس */}
            <div className="mt-3 grid grid-cols-3 items-center text-center" dir="rtl">
              {/* شماره تماس (الان اول) */}
              <div className="col-span-1">
                <div className="text-[12px] text-blue-100/80 mb-1">شماره تماس</div>
                <div className="text-[13px] sm:text-sm font-medium">
                  +98910 - 12558
                </div>
              </div>

              {/* جداکننده عمودی */}
              <div className="flex items-center justify-center">
                <div className="h-6 w-px bg-white/20" />
              </div>

              {/* ایمیل (الان دوم) */}
              <div className="col-span-1">
                <div className="text-[12px] text-blue-100/80 mb-1">ایمیل</div>
                <div className="text-[13px] sm:text-sm font-medium tracking-wide">
                  info@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
