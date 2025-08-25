import { Shield, Zap, Eye, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-cyber overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-primary-glow/20 rounded-full animate-pulse-glow delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Shield className="w-24 h-24 text-primary animate-pulse-glow" />
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
          AI Phishing
          <br />
          <span className="text-accent-glow">Blocker</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Real-time AI protection that detects and blocks phishing websites in under{" "}
          <span className="text-primary-glow font-semibold">150ms</span>. 
          Secure your users with enterprise-grade threat intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" className="bg-gradient-primary hover:shadow-cyber transition-all duration-300 text-lg px-8 py-4">
            <Zap className="w-5 h-5 mr-2" />
            Start Protection
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:shadow-glow-pulse text-lg px-8 py-4">
            <Eye className="w-5 h-5 mr-2" />
            View Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-cyber transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Sub-150ms Detection</h3>
            <p className="text-muted-foreground">Lightning-fast threat analysis with edge computing</p>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-accent/20 hover:shadow-safe transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-safe rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-safe-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">95%+ Accuracy</h3>
            <p className="text-muted-foreground">AI models trained on millions of threat samples</p>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-cyber transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Zero-Day Protection</h3>
            <p className="text-muted-foreground">Block never-before-seen threats in real-time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;