import healthpodDevice from "@/assets/healthpod-device.jpg";
import healthpodApp from "@/assets/healthpod-app.jpg";

const DemoSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            A working prototype demonstrating smart medication management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Device showcase */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-10" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50 h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src={healthpodDevice} 
                  alt="HealthPod Device - Smart Pill Dispenser" 
                  className="w-full max-w-sm mx-auto drop-shadow-xl"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold mb-2">HealthPod Dispenser</h3>
                <p className="text-muted-foreground text-sm">
                  Compact design with multiple pill compartments and OLED display
                </p>
              </div>
            </div>
          </div>

          {/* App showcase */}
          <div className="relative animate-fade-up animation-delay-300">
            <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-10" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50 h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="w-64 md:w-72 rounded-[2.5rem] overflow-hidden shadow-hero border-8 border-foreground/10 bg-foreground/5">
                  <img 
                    src={healthpodApp} 
                    alt="HealthPod Mobile App Interface" 
                    className="w-full"
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold mb-2">HealthPod Mobile App</h3>
                <p className="text-muted-foreground text-sm">
                  Intuitive interface for scheduling, tracking, and health insights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prototype badge */}
        <div className="text-center mt-12 animate-fade-up animation-delay-400">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-healthpod-light-teal text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Working Prototype
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
