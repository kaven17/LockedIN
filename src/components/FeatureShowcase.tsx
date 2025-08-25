import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Shield, 
  Zap, 
  Brain, 
  Globe, 
  Eye, 
  Lock, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Server
} from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced machine learning models with 99.7% accuracy, trained on millions of phishing attempts",
      metrics: ["< 150ms response", "Real-time analysis", "Zero-day protection"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Protection",
      description: "Edge computing with on-device models for instant threat detection without latency",
      metrics: ["Edge processing", "40ms decisions", "Offline capable"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Comprehensive protection combining heuristics, ML models, and threat intelligence",
      metrics: ["URL analysis", "DOM inspection", "Visual similarity"],
      gradient: "from-safe/20 to-safe/5"
    },
    {
      icon: Globe,
      title: "Global Threat Intel",
      description: "Real-time data from worldwide threat feeds and collaborative security networks",
      metrics: ["195 countries", "50M+ daily scans", "Live updates"],
      gradient: "from-warning/20 to-warning/5"
    },
    {
      icon: Eye,
      title: "Visual Analysis",
      description: "OCR and computer vision to detect brand impersonation and visual phishing tactics",
      metrics: ["Logo detection", "Layout analysis", "Brand matching"],
      gradient: "from-danger/20 to-danger/5"
    },
    {
      icon: Lock,
      title: "Privacy-First",
      description: "On-device processing ensures your browsing data stays private and secure",
      metrics: ["Local analysis", "No data collection", "GDPR compliant"],
      gradient: "from-secondary/20 to-secondary/5"
    }
  ];

  const integrations = [
    {
      name: "Browser Extension",
      icon: Smartphone,
      description: "Chrome, Firefox, Edge, Safari",
      status: "Available"
    },
    {
      name: "Enterprise API",
      icon: Server,
      description: "REST API for custom integrations",
      status: "Available"
    },
    {
      name: "Mobile SDK",
      icon: Smartphone,
      description: "iOS and Android libraries",
      status: "Coming Soon"
    },
    {
      name: "Slack Integration",
      icon: Users,
      description: "Team threat notifications",
      status: "Beta"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-safe text-safe-foreground";
      case "Beta": return "bg-warning text-warning-foreground";
      case "Coming Soon": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Advanced Security Features
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Enterprise-grade protection with cutting-edge AI technology
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="text-sm">
              <BarChart3 className="h-3 w-3 mr-1" />
              99.7% Accuracy
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Zap className="h-3 w-3 mr-1" />
              Sub-second Response
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Shield className="h-3 w-3 mr-1" />
              Zero-day Protection
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${feature.gradient} border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-cyber group`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-safe" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integrations Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Platform Integrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{integration.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                      <Badge className={`${getStatusColor(integration.status)} text-xs`}>
                        {integration.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Organization?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of organizations already protected by our AI-powered phishing detection platform. 
              Get started with a free trial and see the difference advanced security makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Start Free Trial
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureShowcase;