import { AlertTriangle, Clock, Users, HeartPulse } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      text: "Missed doses & incorrect timing",
    },
    {
      icon: AlertTriangle,
      text: "Refill errors & confusion",
    },
    {
      icon: Users,
      text: "Elderly & chronic patients at risk",
    },
    {
      icon: HeartPulse,
      text: "Traditional organizers are unsafe",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            The <span className="gradient-text">Problem</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 animate-fade-up animation-delay-100">
            Medication non-adherence is a critical healthcare challenge. Elderly and chronic patients 
            often struggle with missed doses, incorrect timing, and refill errors—leading to serious 
            health complications and preventable hospitalizations.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up animation-delay-200">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground text-center">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
