import healthpodLogo from "@/assets/healthpod-logo.png";
import { Cpu, Smartphone, Bot, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-healthpod-light-teal/20 blur-[180px]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-16 w-16 h-16 rounded-2xl border border-primary/10 rotate-12 animate-float hidden md:block" />
      <div className="absolute bottom-40 left-24 w-10 h-10 rounded-full border-2 border-accent/20 animate-float hidden md:block" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-40 right-20 w-14 h-14 rounded-xl bg-primary/5 rotate-45 animate-float hidden md:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-32 w-6 h-6 rounded-full bg-accent/10 animate-float hidden md:block" style={{ animationDelay: '1.5s' }} />
      
      {/* Additional decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-primary/30 animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-accent/40 animate-pulse hidden lg:block" style={{ animationDelay: '0.7s' }} />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo - Enhanced with glow effect */}
          <div className="relative inline-block mb-8 animate-fade-up">
            {/* Outer glow */}
            <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-30 scale-150" />
            {/* Inner glow ring */}
            <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            {/* Logo container */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 flex items-center justify-center">
              <img 
                src={healthpodLogo} 
                alt="HealthPod Logo" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 animate-fade-up animation-delay-100 tracking-tight">
            <span className="text-foreground">Health</span>
            <span className="gradient-text">Pod</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 mb-6 animate-fade-up animation-delay-200">
            Smart Medication Dispensing System
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed animate-fade-up animation-delay-300">
            An AI-supported smart pill dispensing system that automates medication management and improves adherence.
          </p>

          {/* Technology badges - Enhanced design */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center animate-fade-up animation-delay-400">
            <div className="group inline-flex items-center gap-3 px-5 py-3 md:px-6 md:py-3.5 rounded-2xl bg-card/90 backdrop-blur-md border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground text-sm md:text-base">Arduino Hardware</span>
            </div>
            <div className="group inline-flex items-center gap-3 px-5 py-3 md:px-6 md:py-3.5 rounded-2xl bg-card/90 backdrop-blur-md border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground text-sm md:text-base">Mobile App</span>
            </div>
            <div className="group inline-flex items-center gap-3 px-5 py-3 md:px-6 md:py-3.5 rounded-2xl bg-card/90 backdrop-blur-md border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground text-sm md:text-base">AI Chatbot</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned below content flow */}
        <div className="mt-20 flex justify-center animate-fade-in animation-delay-500">
          <a 
            href="#problem" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Explore</span>
            <div className="w-8 h-12 rounded-full border-2 border-current/30 flex items-start justify-center p-2 group-hover:border-primary/50 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
