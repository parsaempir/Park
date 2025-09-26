import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Award,
  Clock
} from "lucide-react";

const Stats = () => {
  const mainStats = [
    {
      icon: Users,
      value: "۱۲,۵۰۰+",
      label: "کاربر فعال",
      growth: "+۱۸٪",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      value: "۹۸.۵٪",
      label: "میزان رشد",
      growth: "+۵.۲٪",
      color: "text-green-500"
    },
    {
      icon: DollarSign,
      value: "۲.۴ میلیون",
      label: "درآمد ماهانه",
      growth: "+۲۳٪",
      color: "text-purple-500"
    },
    {
      icon: Target,
      value: "۹۹.۹٪",
      label: "آپ‌تایم سیستم",
      growth: "+۰.۱٪",
      color: "text-orange-500"
    }
  ];

  const progressStats = [
    {
      label: "رضایت مشتریان",
      value: 95,
      color: "bg-blue-500"
    },
    {
      label: "سرعت پردازش",
      value: 88,
      color: "bg-green-500"
    },
    {
      label: "امنیت داده",
      value: 100,
      color: "bg-purple-500"
    },
    {
      label: "پشتیبانی فنی",
      value: 92,
      color: "bg-orange-500"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "برترین استارتاپ ۲۰۲۴",
      description: "انتخاب شده توسط انجمن کارآفرینی"
    },
    {
      icon: Clock,
      title: "پاسخ‌گویی ۲۴/۷",
      description: "پشتیبانی مداوم در تمام روزهای سال"
    }
  ];

  return (
    <section id="stats" className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            آمار و <span className="text-primary">دستاوردها</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نتایج قابل اعتماد و رشد مستمر که اعتماد هزاران کاربر را جلب کرده است
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainStats.map((stat, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-card-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
                <div className="inline-flex items-center space-x-1 rtl:space-x-reverse text-green-600 text-sm font-medium">
                  <TrendingUp size={14} />
                  <span>{stat.growth}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Stats and Achievements */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Progress Stats */}
          <Card className="shadow-medium border-border/50">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-semibold text-card-foreground text-center">
                شاخص‌های عملکرد
              </h3>
              <div className="space-y-4">
                {progressStats.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-card-foreground font-medium">{item.label}</span>
                      <span className="text-primary font-bold">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-medium border-border/50">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-semibold text-card-foreground text-center">
                افتخارات و جوایز
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <achievement.icon size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-card-foreground">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Stats;