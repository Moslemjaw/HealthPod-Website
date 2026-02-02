import { User } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    "Moslem Jawich",
    "Hamza Ismail",
    "Abdulredha Mahdi",
    "Ali Qassem",
    "Mishari Almulaifi",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-100">
            The minds behind HealthPod
          </p>
        </div>

        <div className="flex justify-center gap-4 md:gap-6 mb-10 animate-fade-up animation-delay-200 overflow-x-auto pb-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 min-w-[160px]"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground text-center">
                {member}
              </span>
            </div>
          ))}
        </div>

        {/* Supervisor note */}
        <div className="text-center animate-fade-up animation-delay-300">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-healthpod-light-teal">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Supervised by</p>
              <p className="font-semibold text-foreground">Aqeel Albahrani</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
