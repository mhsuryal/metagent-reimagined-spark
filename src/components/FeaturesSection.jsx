import { Brain, Shield, Zap, Layers, RefreshCw, Eye } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Context-Aware Intelligence",
    description: "Agents that understand nuance, interpret context, and anticipate your needs.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Fully auditable systems with predictable behavior for compliance requirements.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "Optimized workflows that execute tasks at unprecedented speeds.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Tool-native agents that work across your existing tech stack.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Agents that improve over time, learning from every interaction.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Complete visibility into agent decisions and reasoning processes.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Metagent
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
            We're not building visual tricks.{" "}
            <span className="text-gradient">We're developing cognitive agents</span>{" "}
            that interpret context, anticipate needs, and work as true partners.
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            At Metagent Studio, we don't build generic AI. We engineer adaptive, safe, and tool-native agents—systems that understand context, reason reliably, and take actions that matter.
          </p>
          <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group font-medium">
            <span>Explore our technology</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
