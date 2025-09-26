import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Shield, 
  Smartphone, 
  Users, 
  TrendingUp, 
  Clock,
  Globe,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "تحلیل داده پیشرفته",
      description: "گزارش‌های تفصیلی و نمودارهای تعاملی برای درک بهتر عملکرد کسب‌وکارتان",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "امنیت بالا",
      description: "حفاظت کامل از اطلاعات شما با رمزگذاری پیشرفته و بک‌آپ خودکار",
      color: "text-green-500"
    },
    {
      icon: Smartphone,
      title: "موبایل فرست",
      description: "دسترسی آسان از هر مکان و زمان با اپلیکیشن موبایل بهینه‌شده",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "مدیریت تیم",
      description: "ابزارهای کامل برای مدیریت کارکنان، تعیین سطح دسترسی و همکاری تیمی",
      color: "text-orange-500"
    },
    {
      icon: TrendingUp,
      title: "رشد فروش",
      description: "ابزارهای فروش هوشمند برای افزایش درآمد و بهبود تجربه مشتری",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "آپدیت لحظه‌ای",
      description: "اطلاعات به‌روز در زمان واقعی و نوتیفیکیشن‌های هوشمند",
      color: "text-cyan-500"
    },
    {
      icon: Globe,
      title: "دسترسی جهانی",
      description: "ابر رایانه قدرتمند با پشتیبانی از چندین زبان و منطقه",
      color: "text-indigo-500"
    },
    {
      icon: Zap,
      title: "عملکرد سریع",
      description: "بهینه‌سازی کامل برای سرعت بالا و تجربه کاربری روان",
      color: "text-yellow-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            ویژگی‌های <span className="text-primary">منحصربه‌فرد</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تمام ابزارهای مورد نیاز برای مدیریت حرفه‌ای کسب‌وکار در یک پلتفرم یکپارچه
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-primary/10 rounded-full px-6 py-3">
            <span className="text-primary font-medium">و بیش از ۲۰ ویژگی دیگر...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;