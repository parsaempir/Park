import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "آدرس دفتر مرکزی",
      content: "تهران، خیابان ولی‌عصر، پلاک ۱۲۳۴",
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "شماره تماس",
      content: "۰۲۱-۱۲۳۴۵۶۷۸",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "ایمیل پشتیبانی",
      content: "support@business.com",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "ساعات کاری",
      content: "شنبه تا چهارشنبه، ۸ صبح تا ۶ عصر",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            تماس با <span className="text-primary">ما</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            آماده پاسخگویی به سوالات شما هستیم. همین حالا با ما در ارتباط باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-large border-border/50">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-2 mb-6">
                <h3 className="text-2xl font-bold text-card-foreground">
                  پیام خود را ارسال کنید
                </h3>
                <p className="text-muted-foreground">
                  تیم پشتیبانی ما در کمترین زمان پاسخ خواهد داد
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">نام</label>
                    <Input 
                      placeholder="نام کامل خود را وارد کنید"
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">ایمیل</label>
                    <Input 
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">موضوع</label>
                  <Input 
                    placeholder="موضوع پیام خود را بنویسید"
                    className="border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">پیام</label>
                  <Textarea 
                    placeholder="پیام تفصیلی خود را بنویسید..."
                    rows={5}
                    className="border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button className="w-full gradient-primary text-primary-foreground shadow-medium hover:shadow-large transition-all">
                  <Send className="ml-2 h-4 w-4" />
                  ارسال پیام
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardContent className="p-6 flex items-center space-x-4 rtl:space-x-reverse">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg gradient-primary flex items-center justify-center ${info.color}`}>
                      <info.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-card-foreground">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact */}
            <Card className="gradient-primary text-primary-foreground shadow-large">
              <CardContent className="p-6 text-center space-y-4">
                <MessageCircle size={48} className="mx-auto opacity-80" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    نیاز به مشاوره فوری دارید؟
                  </h3>
                  <p className="text-primary-foreground/80">
                    با کارشناسان ما مستقیماً تماس بگیرید
                  </p>
                </div>
                <Button 
                  variant="secondary"
                  className="bg-card text-primary hover:bg-card/90 shadow-medium"
                >
                  تماس فوری
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-medium border-border/50">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center text-muted-foreground">
                  <div className="text-center space-y-2">
                    <MapPin size={48} className="mx-auto" />
                    <p className="font-medium">نقشه دفتر مرکزی</p>
                    <p className="text-sm">تهران، خیابان ولی‌عصر</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;