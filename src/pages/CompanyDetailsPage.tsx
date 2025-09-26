import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Crown, Mail, ExternalLink, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CompanyDetailsPage = () => {
  const companyDetails = {
    name: "هوش نگار",
    field: "حوزه:هوش مصنوعی",
    code: "پلاک:A_120",
    introduction: "توسعه سامانه‌های بینایی ماشین و تحلیل داده برای صنایع تولیدی و پزشکی.",
    manager: "مهدی رضایی",
    address: "پلاک A، طبقه ۱، اتاق ۱۰۲",
    email: "info@gmail.com",
    website: "وب سایت شرکت",
    phone: "09156005626",
    categories: ["ورودی اصلی", "ورودی شمالی", "ورودی شرقی"]
  };

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <Header />
      
      <main className="pt-14">
        {/* Header Section */}
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-blue-600">جزئیات شرکت</h1>
            <Link to="/search" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 ml-2" />
              بازگشت
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
          {/* Company Name */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4">
              <div className="text-center space-y-3">
                <h2 className="text-xl font-bold text-primary">{companyDetails.name}</h2>
                <p className="text-sm text-slate-600">{companyDetails.field} • {companyDetails.code}</p>
                
                <div className="flex gap-2">
                  <Button className="flex-1 text-sm py-2 rounded-lg bg-primary hover:bg-primary/90 text-white">
                    نمایش مسیر روی نقشه
                  </Button>
                  <Button variant="outline" className="flex-1 text-sm py-2 rounded-lg border-slate-300 text-slate-600">
                    کپی لینک
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-800">معرفی</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {companyDetails.introduction}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Manager */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-800">مدیرعامل</h3>
                <p className="text-sm text-slate-600">{companyDetails.manager}</p>
              </div>
            </CardContent>
          </Card>

          {/* Internal Address */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-800">آدرس داخلی</h3>
                <p className="text-sm text-slate-600">{companyDetails.address}</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">اطلاعات تماس</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center py-2">
                    <Mail className="h-4 w-4 text-slate-400 ml-2" />
                    <span className="text-sm text-slate-600">{companyDetails.email}</span>
                  </div>
                  
                  <div className="flex items-center py-2">
                    <ExternalLink className="h-4 w-4 text-slate-400 ml-2" />
                    <span className="text-sm text-slate-600">{companyDetails.website}</span>
                  </div>
                  
                  <div className="flex items-center py-2">
                    <Phone className="h-4 w-4 text-slate-400 ml-2" />
                    <span className="text-sm text-slate-600">{companyDetails.phone}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Park Entries */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-800">ورودی‌های پارک</h3>
                <p className="text-sm text-slate-600">ورودی اصلی، ورودی شمالی، ورودی شرقی</p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button asChild className="flex-1 rounded-lg bg-primary hover:bg-primary/90 text-white">
              <Link to="/map">
                نمایش مسیر روی نقشه
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 rounded-lg border-slate-300 text-slate-600">
              <Link to="/search">
                بازگشت
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyDetailsPage;