import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Welcome" },
    { href: "/about", label: "About Me" },
    { href: "/spanish", label: "Spanish Classes" },
    { href: "/english", label: "English Classes" },
  ];

  const handleBookClick = () => {
    const name = prompt("Please enter your name:");
    if (!name) return;
    const email = prompt("Please enter your email:");
    if (!email) return;
    const course = prompt("What course are you interested in?");
    if (!course) return;

    const subject = encodeURIComponent("Class Booking Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterested Course: ${course}`);

    window.location.href = `mailto:fixmgarz07@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <a className="font-bold text-2xl text-primary flex items-center gap-1 hover:opacity-90 transition-opacity">
              <span className="text-accent text-3xl leading-none">.</span>
              Felix's Language Lessons
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`text-sm font-semibold transition-colors hover:text-accent ${location === link.href ? "text-accent" : "text-foreground/80"}`}>
                  {link.label}
                </a>
              </Link>
            ))}
            <Button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 text-primary-foreground border border-primary-border min-h-9 py-2 ml-2 rounded-full px-6 shadow-sm hover:shadow-md transition-all font-bold bg-[#007cf8]"
              onClick={handleBookClick}
            >
              Book a Class
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground p-2 -mr-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 shadow-lg absolute w-full left-0">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={`text-lg font-semibold p-3 rounded-xl transition-colors ${location === link.href ? "bg-primary/5 text-accent" : "text-foreground hover:bg-gray-50"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button 
            className="w-full mt-2 h-12 rounded-xl font-bold bg-[#007cf8]" 
            onClick={() => {
              setIsOpen(false);
              handleBookClick();
            }}
          >
            Book a Class
          </Button>
        </div>
      )}
    </nav>
  );
}
