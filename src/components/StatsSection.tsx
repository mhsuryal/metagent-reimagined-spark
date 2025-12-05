import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 98, suffix: "%", label: "Task success across multi-tool workflows" },
  { value: 95, suffix: "%", label: "Accuracy improvement" },
  { value: 10, suffix: "x", label: "Faster domain adaptation" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-8"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm md:text-base max-w-xs mx-auto">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 relative">
      {/* Glowing line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Intelligence Framework Behind{" "}
              <span className="text-gradient">Human-like Metagents</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our modular engine enables your agents to think logically, learn from memory, 
              and operate seamlessly across real-world workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Glowing line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
};

export default StatsSection;
