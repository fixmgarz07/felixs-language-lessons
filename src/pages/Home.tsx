import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Globe,
  Calendar,
  GraduationCap,
  ArrowRight,
  Quote,
} from "lucide-react";
import heroTeacher from "@assets/Screenshot_2026-03-03_095943_1772635227290.png";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-[#7aadcf] pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-full blur-3xl opacity-50 -z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Professional Online Language Tutoring
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-[1.1] text-white tracking-tight">
                Welcome to <br />
                <span className="text-accent relative inline-block">
                  Felix's
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-4 text-white/40"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 15 Q 50 5 100 15"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                <br />
                Language Lessons
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg font-medium">
                Professional Spanish and English lessons tailored to your goals.
                Learn with personalized lessons designed to help you communicate
                confidently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/spanish">
                  <Button
                    size="lg"
                    className="rounded-full text-base h-14 px-8 shadow-lg hover:shadow-xl transition-all font-bold gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    View Spanish Classes <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/english">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full text-base h-14 px-8 border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 font-bold hover:border-white"
                  >
                    View English Classes
                  </Button>
                </Link>
              </div>
              <div className="pt-2">
                <Link href="/about">
                  <a className="text-sm font-bold text-white hover:text-accent underline-offset-4 hover:underline flex items-center gap-1 transition-colors">
                    Read more about my teaching method &rarr;
                  </a>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-accent rounded-[2.5rem] transform rotate-3 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-primary rounded-[2.5rem] transform -rotate-2 scale-100 opacity-10"></div>
              <img
                src={heroTeacher}
                alt="Felix teaching a class"
                className="rounded-[2.5rem] shadow-2xl relative z-10 object-cover w-full aspect-[4/5] lg:aspect-square border-4 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 md:p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-border/50 animate-in slide-in-from-bottom-4 delay-300">
                <div className="w-12 h-12 bg-[#ecfdf5] text-[#059669] rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="font-extrabold text-foreground leading-none mb-1">
                    Beginner to Advanced
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    Tailored for every level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Why choose Felix's Language Lessons?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 font-medium">
            My teaching method focuses on clarity, confidence, and practical use
            of the language in a supportive environment.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <GraduationCap size={32} />,
                title: "Personalized Lessons",
                desc: "Adapted to your specific needs, pace, and objectives.",
              },
              {
                icon: <Calendar size={32} />,
                title: "Flexible Scheduling",
                desc: "Book classes at times that fit your busy lifestyle.",
              },
              {
                icon: <Globe size={32} />,
                title: "Online Classes",
                desc: "Learn from anywhere in the world with a reliable connection.",
              },
              {
                icon: <CheckCircle size={32} />,
                title: "Real Communication",
                desc: "Focus on practical skills to communicate confidently.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#f8fafc] hover:bg-white transition-all duration-300 border border-transparent hover:border-primary/10 hover:shadow-xl flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:text-accent group-hover:shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-extrabold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-24 md:py-32 bg-[#f8fafc] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              What my students say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Join dozens of satisfied students who have achieved their language
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "June P",
                role: "Spanish Student - NY",
                content:
                  "Felix is such a talented, patient and knowledgeable teacher and person. It has been a year and I still look forward to each and every lesson!",
                initials: "JP",
                color: "bg-blue-100 text-blue-600",
              },
              {
                name: "Jakob S",
                role: "Spanish Student - GE",
                content:
                  "Learning a language is pretty hard for me, therefore, I'm glad that I found you as my teacher. The lessons are generally fun and help me to keep going.",
                initials: "JS",
                color: "bg-green-100 text-green-600",
              },
              {
                name: "Lucile S",
                role: "Spanish Student - FR",
                content:
                  "Felix is an excellent teacher. I have been learning with him for a year and a half, and he always takes the time to understand my needs and adapt each lesson to help me improve.",
                initials: "LS",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border/50 flex flex-col relative"
              >
                <div className="text-accent mb-6">
                  <Quote size={40} fill="currentColor" className="opacity-20" />
                </div>
                <p className="text-lg font-medium text-foreground leading-relaxed mb-8 flex-grow italic">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <Avatar className="w-14 h-14 border-2 border-white shadow-md">
                    <AvatarFallback className={`font-bold ${review.color}`}>
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-extrabold text-primary leading-tight">
                      {review.name}
                    </h4>
                    <p className="text-sm font-bold text-accent">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 border-2 border-primary/20 hover:bg-primary/5 font-bold hover:border-primary gap-2"
              >
                See More Reviews <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to start your language journey?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 font-medium">
            Book a trial class today and let's discuss how we can achieve your
            goals together.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const name = prompt("Please enter your name:");
              const email = prompt("Please enter your email:");
              const interest = prompt("What course are you interested in?");
              if (name && email) {
                const subject = encodeURIComponent("Trial Class Inquiry");
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\nInterest: ${interest}`,
                );
                window.location.href = `mailto:fixmgarz07@gmail.com?subject=${subject}&body=${body}`;
              }
            }}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-16 px-12 text-lg font-extrabold shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Contact Me Today
          </Button>
        </div>
      </section>
    </div>
  );
}
