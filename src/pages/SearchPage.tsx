import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SearchPage = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const mockCompanies = [{
    id: 1,
    name: "هوش نگار",
    field: "مدیر:مهدی رضایی • حوزه:هوش مصنوعی",
    code: "پلاک:A_120"
  }, {
    id: 2,
    name: "فن‌آوا",
    field: "مدیر:علی محمدی • حوزه:نرم‌افزار",
    code: "پلاک:B_85"
  }, {
    id: 3,
    name: "راهکار",
    field: "مدیر:سارا احمدی • حوزه:مشاوره",
    code: "پلاک:C_42"
  }];

  const filterOptions = [{
    id: "all",
    label: "همه"
  }, {
    id: "tech",
    label: "فناوری"
  }, {
    id: "ai",
    label: "هوش مصنوعی"
  }, {
    id: "software",
    label: "نرم‌افزار"
  }, {
    id: "consulting",
    label: "مشاوره"
  }];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-14">
        {/* Header Section */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">جستجو</h1>
            <Link to="/" className="flex items-center text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5 ml-2" />
              <span className="text-base font-medium">بازگشت</span>
            </Link>
          </div>
        </div>

        <div className="px-4 py-6 space-y-4">
          {/* Company Dropdown */}
          <div className="max-w-md mx-auto">
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger className="w-full h-12 text-base border-border rounded-xl bg-background px-4 flex flex-row-reverse justify-between items-center">
                <SelectValue placeholder="نام شرکت" className="text-right flex-1" />
              </SelectTrigger>
              <SelectContent>
                {mockCompanies.map(company => (
                  <SelectItem key={company.id} value={company.id.toString()}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Input */}
          <div className="max-w-md mx-auto">
            <Input 
              type="text" 
              placeholder="نام شرکت، مدیر یا حوزه" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              className="w-full h-12 text-base border-border rounded-xl bg-background px-4" 
            />
          </div>

          {/* Search Results */}
          <div className="space-y-4 max-w-md mx-auto">
            {mockCompanies.map(company => (
              <Card key={company.id} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-primary text-right flex-1">{company.name}</h3>
                        <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 text-right">{company.field}</p>
                      <p className="text-sm text-muted-foreground text-right">{company.code}</p>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button asChild size="sm" className="flex-1 text-sm py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link to={`/company/${company.id}`}>
                          نمایش مسیر
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-sm py-2 rounded-lg border-border hover:bg-secondary">
                        جزئیات
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center text-xs text-muted-foreground mt-8 px-4">
            برای مشاهده مستقیم مسیر می‌توانید از صفحه نقشه استفاده کنید
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;