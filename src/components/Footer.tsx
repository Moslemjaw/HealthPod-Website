import healthpodLogo from "@/assets/healthpod-logo.png";
import { AlertCircle, Pill, Activity, Bot, Cpu, Smartphone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#problem", label: "Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Demo" },
    { href: "#team", label: "Team" },
  ];

  const features = [
    { icon: Pill, label: "Automated Dispensing" },
    { icon: Activity, label: "Real-time Monitoring" },
    { icon: Bot, label: "AI Chatbot" },
    { icon: Cpu, label: "Smart Hardware" },
    { icon: Smartphone, label: "Mobile App" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Disclaimer section */}
      <div className="bg-muted/50 py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Important Disclaimer</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This project is a prototype developed for academic and demonstration purposes only. 
                  It is not a certified medical device and should not be used for actual medical treatment 
                  or healthcare decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-foreground text-background py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-lg">
                  <img 
                    src={healthpodLogo} 
                    alt="HealthPod Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">HealthPod</h3>
                  <p className="text-background/60 text-xs">Smart Medication System</p>
                </div>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                An innovative AI-supported smart pill dispensing system designed to automate medication 
                management and improve adherence for elderly and chronic patients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-background/90">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-background/90">
                Key Features
              </h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-background/60">
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Project */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-background/90">
                About The Project
              </h4>
              <p className="text-sm text-background/60 leading-relaxed mb-4">
                HealthPod is developed as a capstone engineering project, combining hardware innovation 
                with modern software to address medication non-adherence challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-background/10 text-xs text-background/70">Arduino</span>
                <span className="px-3 py-1 rounded-full bg-background/10 text-xs text-background/70">IoT</span>
                <span className="px-3 py-1 rounded-full bg-background/10 text-xs text-background/70">Mobile App</span>
                <span className="px-3 py-1 rounded-full bg-background/10 text-xs text-background/70">AI</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-background/50 text-center md:text-left">
                © {new Date().getFullYear()} HealthPod. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-xs text-background/40">
                  Built with ❤️ by the HealthPod Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
