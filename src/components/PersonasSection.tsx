import { Bot, Briefcase, Code, Lightbulb } from "lucide-react";

const personas = [
  {
    icon: Briefcase,
    title: "Employee",
    description: "Automate repetitive tasks so you can focus on real work.",
    gradient: "from-primary to-[hsl(200_80%_50%)]",
  },
  {
    icon: Code,
    title: "Developer",
    description: "Build and integrate AI agents into your applications seamlessly.",
    gradient: "from-[hsl(200_80%_50%)] to-accent",
  },
  {
    icon: Lightbulb,
    title: "Founder",
    description: "Scale your business operations with intelligent automation.",
    gradient: "from-accent to-[hsl(320_80%_60%)]",
  },
  {
    icon: Bot,
    title: "Enterprise",
    description: "Deploy auditable, compliant AI agents across your organization.",
    gradient: "from-[hsl(320_80%_60%)] to-primary",
  },
];

const PersonasSection = () => {
  return (
    <section id="personas" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Who We Build For
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Persona</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how Metagent can transform your workflow based on your role and needs.
          </p>
        </div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className="group relative glass rounded-2xl p-6 hover:bg-secondary/30 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${persona.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${persona.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <persona.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {persona.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {persona.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
