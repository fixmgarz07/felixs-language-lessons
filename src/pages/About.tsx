import { Button } from "@/components/ui/button";
import portrait from "@assets/1748879677469_1772165065073.jpg";
import { Award, BookOpen, MessageCircle, Quote } from "lucide-react";

const AvatarIcon = ({ name, color }: { name: string, color: string }) => {
  const initials = name === "Anonymous" ? "A" : name.split(' ').map(n => n[0]).join('');
  return (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-sm border-2 border-white ${color}`}>
      {initials}
    </div>
  );
};

export default function About() {
  const reviews = [
    { 
      name: "June P", 
      role: "Spanish Student - NY", 
      content: "No matter what mood I am in before our lesson I consistently leave feeling happier and more confident in my Spanish. Felix is such a talented, patient and knowledgeable teacher and person. It has been a year and I still look forward to each and every lesson! Other people have complimented me on my progress which really makes me feel wonderful!", 
      color: "bg-blue-500"
    },
    { 
      name: "Jakob S", 
      role: "Spanish Student - GE", 
      content: "Learning a language is pretty hard for me, especially alongside working full-time. It's a big commitment that takes time. Therefore, I'm glad that I found you as my teacher. The lessons are generally fun and help me to keep going, even when I feel under the weather.", 
      color: "bg-emerald-500"
    },
    { 
      name: "Anonymous", 
      role: "Spanish Student - GE", 
      content: "Tomé clases de español con Félix García porque buscaba un profesor que prestara atención a los detalles, y estoy muy agradecida de haberlo encontrado. Él corrige cuidadosamente mi pronunciación, gramática y uso de vocabulario, siempre con paciencia y respeto, incluso cuando repito los mismos errores.", 
      color: "bg-orange-500"
    },
    { 
      name: "Lucile S", 
      role: "Spanish Student - FR", 
      content: "Felix is an excellent teacher. I have been learning with him for a year and a half, and he always takes the time to understand my needs and adapt each lesson to help me improve. He is patient, organised, and very dedicated to his students. I appreciate his structured and professional approach, and I strongly recommend him as a teacher.", 
      color: "bg-purple-500"
    },
    { 
      name: "Laura S", 
      role: "Spanish Student - COL", 
      content: "Felix is a great instructor! He has brought my Spanish skill from A1 to, currently, a B2 level and improving daily. He adapted the lessons to fit my learning style while still keeping important milestones in mind. With support from Felix, I feel comfortable navigating a move to Latin America!", 
      color: "bg-rose-500"
    },
    { 
      name: "Anonymous", 
      role: "Spanish Student - COL", 
      content: "Felix is very patient with me as a new Spanish speaker. He is adapting my lessons for some additional exercises to complete prior to the next class, which helps me progress more and have exposure more frequently.", 
      color: "bg-indigo-500"
    },
    { 
      name: "Sharon S", 
      role: "Spanish Student - NY", 
      content: "Felix is an excellent instructor. He is patient and supportive. I enjoyed the lessons and looked forward to every class.", 
      color: "bg-teal-500"
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20 animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-[#f8fafc] py-20 md:py-28 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
            Professional Language Teacher
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-primary tracking-tight">About Felix</h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Helping students develop real communication skills through structured, personalized lessons.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-primary rounded-3xl transform -rotate-3 scale-105 opacity-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={portrait} alt="Felix Garcia Portrait" className="w-full h-auto object-cover aspect-[4/5]" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -right-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border border-border/50">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <Award size={20} />
              </div>
              <div>
                <p className="font-extrabold text-sm">Certified</p>
                <p className="text-xs text-muted-foreground font-medium">Instructor</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary tracking-tight">Hello, I'm Felix Garcia</h2>
              <div className="space-y-4 text-lg text-muted-foreground font-medium leading-relaxed">
                <p>
                  I am a professional language teacher with a degree in Education and advanced English proficiency (C2 level). I specialize in helping students develop real communication skills through structured, personalized lessons.
                </p>
                <p>
                  With experience teaching both Spanish and English to students from different countries and levels, my teaching method focuses on clarity, confidence, and practical use of the language.
                </p>
              </div>
            </div>

            <div className="bg-[#f8fafc] p-8 md:p-10 rounded-3xl border border-border relative overflow-hidden">
              <MessageCircle className="absolute top-4 right-4 text-primary/5 w-24 h-24" />
              <h3 className="text-2xl font-extrabold mb-4 text-primary relative z-10">My Teaching Philosophy</h3>
              <p className="text-lg font-medium text-foreground leading-relaxed relative z-10 italic">
                "My goal is to help each student achieve their personal, academic, or professional language goals in a supportive and motivating environment. Language is a tool for connection, and I am here to help you use it effectively."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 pt-4">
              <div>
                <h3 className="text-xl font-extrabold mb-4 flex items-center gap-3 text-primary">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award size={16} />
                  </div>
                  Qualifications
                </h3>
                <ul className="space-y-3 text-muted-foreground font-medium">
                  <li className="flex items-center gap-2"><span className="text-accent text-xl leading-none">•</span> Degree in Education</li>
                  <li className="flex items-center gap-2"><span className="text-accent text-xl leading-none">•</span> Advanced English (C2 Level)</li>
                  <li className="flex items-center gap-2"><span className="text-accent text-xl leading-none">•</span> Native Spanish Speaker</li>
                  <li className="flex items-center gap-2"><span className="text-accent text-xl leading-none">•</span> Certified Instructor</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-4 flex items-center gap-3 text-primary">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <BookOpen size={16} />
                  </div>
                  Experience
                </h3>
                <ul className="space-y-3 text-muted-foreground font-medium">
                  <li className="flex items-center gap-2"><span className="text-accent text-xl leading-none">•</span> International students</li>
                  <li className="flex items-center gap-2"><span className="text-accent text-xl leading-none">•</span> Beginners to Advanced</li>
                  <li className="flex items-center gap-2"><span className="text-accent text-xl leading-none">•</span> Exam preparation</li>
                  <li className="flex items-center gap-2"><span className="text-accent text-xl leading-none">•</span> Conversational practice</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5" onClick={() => {
                const name = prompt("Please enter your name:");
                const email = prompt("Please enter your email:");
                const interest = prompt("What course are you interested in?");
                if (name && email) {
                  const subject = encodeURIComponent("Consultation Inquiry");
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${interest}`);
                  window.location.href = `mailto:fixmgarz07@gmail.com?subject=${subject}&body=${body}`;
                }
              }}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Reviews Section */}
      <section className="mt-24 md:mt-32 pt-24 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-primary">Student Reviews</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Read what students from around the world are saying about their learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-[#f8fafc] p-8 rounded-[2rem] shadow-sm border border-border/50 flex flex-col relative transition-all hover:bg-white hover:shadow-md">
                <div className="text-accent mb-6">
                  <Quote size={32} fill="currentColor" className="opacity-20" />
                </div>
                <p className="text-base font-medium text-foreground leading-relaxed mb-8 flex-grow italic">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/20">
                  <AvatarIcon name={review.name} color={review.color} />
                  <div>
                    <h4 className="font-extrabold text-primary leading-tight text-sm">{review.name}</h4>
                    <p className="text-xs font-bold text-accent">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
