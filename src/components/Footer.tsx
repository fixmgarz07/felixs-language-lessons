import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <h3 className="font-bold text-2xl mb-4 flex items-center gap-1">
            <span className="text-accent text-3xl leading-none">.</span>
            Felix's Language Lessons
          </h3>
          <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
            Professional Spanish and English lessons tailored to your personal and professional goals.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-white tracking-wide uppercase text-sm">Quick Links</h4>
          <ul className="space-y-4 text-primary-foreground/80 font-medium">
            <li><Link href="/"><a className="hover:text-accent transition-colors">Welcome</a></Link></li>
            <li><Link href="/about"><a className="hover:text-accent transition-colors">About Me</a></Link></li>
            <li><Link href="/spanish"><a className="hover:text-accent transition-colors">Spanish Classes</a></Link></li>
            <li><Link href="/english"><a className="hover:text-accent transition-colors">English Classes</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white tracking-wide uppercase text-sm">Contact</h4>
          <ul className="space-y-4 text-primary-foreground/80 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">Name:</span> Felix Garcia
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">Email:</span> fixmgarz07@gmail.com
            </li>
            <li className="mt-8 pt-8 border-t border-primary-foreground/10 text-sm font-normal opacity-60">
              &copy; {new Date().getFullYear()} Felix's Language Lessons. All rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
