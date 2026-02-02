import { Cpu, Radio, Monitor, Wifi, Zap } from "lucide-react";

const SpecsSection = () => {
  const specs = [
    { icon: Cpu, label: "MCU", value: "Arduino-based controller" },
    { icon: Radio, label: "Sensors", value: "IR distance sensors" },
    { icon: Monitor, label: "Display", value: "OLED (I2C)" },
    { icon: Wifi, label: "Connectivity", value: "Wi-Fi enabled" },
    { icon: Zap, label: "Power", value: "5V regulated supply" },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
              Technical <span className="gradient-text">Specifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 animate-fade-up animation-delay-100">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="group p-5 rounded-2xl bg-background border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {spec.label}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
