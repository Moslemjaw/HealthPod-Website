import { Pill, Activity, Bot, Bell, Settings, Heart } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Pill,
      title: "Automated Pill Dispensing",
      description: "Precise, timed medication delivery at scheduled intervals",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Track pill levels and device status instantly",
    },
    {
      icon: Bot,
      title: "AI Pharmacist Chatbot",
      description: "Get medication guidance and answers to health questions",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a dose with intelligent notifications",
    },
    {
      icon: Settings,
      title: "Low-cost Modular Design",
      description: "Affordable and easy to maintain or upgrade",
    },
    {
      icon: Heart,
      title: "Elderly-friendly Interface",
      description: "Simple, clear controls designed for accessibility",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Key <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Everything you need for safe, reliable medication management
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
