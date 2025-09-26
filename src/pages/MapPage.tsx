import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import parkMapImage from "@/assets/new-map.png";

const MapPage = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-14">
        {/* Header Section */}
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-blue-600">نقشه</h1>
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 ml-2" />
              بازگشت
            </Link>
          </div>
        </div>

        <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
          {/* Search Form */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4 space-y-4">
              {/* Company Name Dropdown */}
              <div className="space-y-2">
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger className="w-full border-slate-200 rounded-lg bg-slate-50">
                    <SelectValue placeholder="نام شرکت" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">همه شرکت‌ها</SelectItem>
                    <SelectItem value="hoshnegar">هوش نگار</SelectItem>
                    <SelectItem value="fanava">فن‌آوا</SelectItem>
                    <SelectItem value="rahkar">راهکار</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Input */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="نام شرکت،مدیر یا حوزه"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-slate-200 rounded-lg bg-slate-50"
                />
              </div>

              {/* Path Button */}
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3">
                کپی لینک مسیر
              </Button>

              {/* Map Controls */}
              <div className="flex items-center justify-between">
                <Select>
                  <SelectTrigger className="w-32 border-slate-200 rounded-lg bg-slate-50">
                    <SelectValue placeholder="ورودی اصلی" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">ورودی اصلی</SelectItem>
                    <SelectItem value="north">ورودی شمالی</SelectItem>
                    <SelectItem value="south">ورودی جنوبی</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="border-slate-300 text-slate-600">
                  مرکز کردن
                </Button>
              </div>

              {/* Zoom Controls */}
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="border-slate-300">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-slate-300">
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Map Section */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Map Image */}
                <div className="w-full h-64 bg-gray-100">
                  <img 
                    src={parkMapImage} 
                    alt="نقشه پارک علم و فناوری" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Legend */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4">
              <h4 className="text-sm font-semibold mb-3">راهنما</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>ورودی</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>شرکت</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-blue-500 rounded-full"></div>
                  <span>مسیر</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MapPage;