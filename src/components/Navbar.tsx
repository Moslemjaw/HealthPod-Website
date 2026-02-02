import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#specs", label: "Specs" },
  { href: "#team", label: "Team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href);
      for (const section of sections.reverse()) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed navbar - cross-platform optimized */}
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out w-[calc(100%-2rem)] sm:w-auto ${
          scrolled 
            ? "top-3" 
            : "top-4 sm:top-6"
        }`}
      >
        {/* Desktop/Tablet nav - pill shaped */}
        <div className="hidden sm:flex items-center justify-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-full bg-foreground/95 backdrop-blur-lg shadow-xl border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap select-none touch-manipulation ${
                activeSection === link.href
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden w-11 h-11 flex items-center justify-center rounded-full bg-foreground/95 backdrop-blur-lg shadow-xl border border-white/10 touch-manipulation active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 sm:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu - center modal style */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-xs bg-card rounded-2xl shadow-2xl border border-border/50 transition-all duration-200 sm:hidden ${
          isOpen 
            ? "opacity-100 scale-100 pointer-events-auto" 
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors touch-manipulation active:bg-muted"
              aria-label="Close menu"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 touch-manipulation ${
                  activeSection === link.href
                    ? "gradient-bg text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 active:bg-muted"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
