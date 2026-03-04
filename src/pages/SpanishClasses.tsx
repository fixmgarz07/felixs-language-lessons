import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import spanishImg from "@assets/Spanish_Pic_1772165035006.jpg";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function SpanishClasses() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "Spanish" });

  const handleBook = () => {
    const subject = encodeURIComponent("Booking Inquiry: Spanish Class");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.course}`);
    window.location.href = `mailto:fixmgarz07@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pb-20 animate-in fade-in duration-500 bg-[#fdfdfd]">
      {/* Header */}
      <div className="bg-primary text-primary-foreground pt-20 pb-28 md:pt-28 md:pb-40 relative overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-extrabold text-sm mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></span>
              Enrolling Now
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">Spanish <br/>Classes</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed font-medium">
              Learn Spanish with structured, personalized lessons designed to help you speak confidently and naturally.
            </p>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-accent rounded-3xl transform rotate-6 scale-100 opacity-20"></div>
            <img 
              src={spanishImg} 
              alt="Spanish Study Materials" 
              className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/10 relative z-10 aspect-video object-cover" 
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border/50">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-primary tracking-tight">What you will learn</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Conversation skills for real life",
                  "Grammar and structure foundations",
                  "Natural pronunciation and intonation",
                  "Listening comprehension for native speakers",
                  "Cultural nuances and idioms",
                  "Vocabulary expansion tailored to you"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[#f8fafc] border border-transparent hover:border-primary/10 transition-colors">
                    <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={24} />
                    <span className="font-bold text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border/50">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-primary tracking-tight">Who these classes are for</h2>
              <div className="flex flex-wrap gap-3">
                {["Beginners", "Intermediate students", "Advanced students", "Professionals", "Travelers", "Exam Prep"].map((badge, i) => (
                  <span key={i} className="px-6 py-3 rounded-full border-2 border-primary/10 font-bold text-primary hover:bg-primary hover:text-white transition-all cursor-default shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </section>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-3xl shadow-xl border border-border/50 p-8 md:p-10 bg-[#7aadcf]">
              <h3 className="text-2xl font-extrabold mb-8 text-primary tracking-tight">Book your class</h3>
              <div className="space-y-4 mb-8">
                <Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="rounded-xl h-12" />
                <Input placeholder="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="rounded-xl h-12" />
                <Select value={formData.course} onValueChange={(val) => setFormData({...formData, course: val})}>
                  <SelectTrigger className="rounded-xl h-12">
                    <SelectValue placeholder="Interested Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Spanish - Beginner">Spanish - Beginner</SelectItem>
                    <SelectItem value="Spanish - Intermediate">Spanish - Intermediate</SelectItem>
                    <SelectItem value="Spanish - Advanced">Spanish - Advanced</SelectItem>
                    <SelectItem value="Spanish - Professional">Spanish - Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg" onClick={handleBook} disabled={!formData.name || !formData.email} className="w-full h-16 rounded-2xl text-lg font-extrabold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Book a Spanish Class <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
