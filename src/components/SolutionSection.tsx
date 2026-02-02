import { Scan, Cpu, Bell } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      icon: Scan,
      number: "01",
      title: "Sensors & Hardware Monitoring",
      description: "IR sensors track pill availability inside the device",
    },
    {
      icon: Cpu,
      number: "02",
      title: "Smart Processing & Scheduling",
      description: "Arduino controller manages dispensing and schedules",
    },
    {
      icon: Bell,
      number: "03",
      title: "User Feedback & App Interaction",
      description: "Status, reminders, and alerts shown on device & mobile app",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            How <span className="gradient-text">HealthPod</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            A seamless three-step process for automated medication management
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="relative p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-primary/20">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 px-3 py-1 rounded-lg gradient-bg text-primary-foreground text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-healthpod-light-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
