import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Briefcase } from "lucide-react";
import englishImg from "@assets/English_Pic_1772165025829.jpg";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function EnglishClasses() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "English" });

  const handleBook = () => {
    const subject = encodeURIComponent("Booking Inquiry: English Class");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.course}`);
    window.location.href = `mailto:fixmgarz07@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pb-20 animate-in fade-in duration-500 bg-white">
      {/* Header */}
      <div className="bg-[#f8fafc] pt-20 pb-28 md:pt-28 md:pb-40 relative overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-extrabold text-sm mb-8 border border-primary/20">
              <Briefcase size={16} />
              Professional Instruction
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-primary leading-[1.1]">English <br/>Classes</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Professional English lessons designed to help you communicate confidently in academic, professional, and everyday situations.
            </p>
          </div>
          <div className="hidden md:block relative">
             <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3 scale-105"></div>
            <img 
              src={englishImg} 
              alt="English Study Materials" 
              className="rounded-3xl shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white relative z-10 aspect-video object-cover" 
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/40">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-primary tracking-tight">What you will learn</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Speaking fluency and confidence",
                  "Advanced Grammar concepts",
                  "Clear pronunciation",
                  "Active listening skills",
                  "Business English & Professional writing",
                  "Presentation and meeting prep"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border-2 border-primary/5 hover:border-primary/20 transition-colors bg-white">
                    <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={24} />
                    <span className="font-bold text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/40">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-primary tracking-tight">Who these classes are for</h2>
              <div className="flex flex-wrap gap-3">
                {["Beginners", "Intermediate students", "Advanced students", "Professionals", "Business English learners"].map((badge, i) => (
                  <span key={i} className="px-6 py-3 rounded-full bg-primary text-white font-bold shadow-md hover:bg-primary/90 transition-colors cursor-default">
                    {badge}
                  </span>
                ))}
              </div>
            </section>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-primary text-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-tr-full"></div>
              
              <h3 className="text-2xl font-extrabold mb-8 tracking-tight relative z-10">Book your class</h3>
              <div className="space-y-4 mb-8 relative z-10 text-foreground">
                <Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="rounded-xl h-12 bg-white/10 text-white placeholder:text-white/60 border-white/20" />
                <Input placeholder="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="rounded-xl h-12 bg-white/10 text-white placeholder:text-white/60 border-white/20" />
                <Select value={formData.course} onValueChange={(val) => setFormData({...formData, course: val})}>
                  <SelectTrigger className="rounded-xl h-12 bg-white/10 text-white border-white/20">
                    <SelectValue placeholder="Interested Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English - Beginner">English - Beginner</SelectItem>
                    <SelectItem value="English - Intermediate">English - Intermediate</SelectItem>
                    <SelectItem value="English - Advanced">English - Advanced</SelectItem>
                    <SelectItem value="English - Business">English - Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg" onClick={handleBook} disabled={!formData.name || !formData.email} className="w-full h-16 rounded-2xl text-lg font-extrabold shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] transition-all hover:-translate-y-1 gap-2 bg-accent text-accent-foreground border-0 relative z-10 hover:bg-accent/90">
                Book an English Class <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
