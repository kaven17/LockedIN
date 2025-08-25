import { useState, useEffect } from "react";
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

// Animated hex text for metrics
const HexMetric = ({ children, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(true);
  
  const chars = "0123456789ABCDEF";
  const finalText = children.toString();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          finalText.split("").map((letter, index) => {
            if (index < iteration) {
              return letter;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );
        
        if (iteration >= finalText.length) {
          clearInterval(interval);
          setIsDecrypting(false);
        }
        iteration += 1/2;
      }, 50);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [finalText, delay]);
  
  return (
    <span className={`font-mono text-sm ${isDecrypting ? 'text-green-400' : 'text-cyan-400'}`}>
      {displayText}
    </span>
  );
};

// Status indicator with blinking effect
const StatusIndicator = ({ status }) => {
  const [blink, setBlink] = useState(false);
  
  useEffect(() => {
    if (status === "Available") {
      const interval = setInterval(() => {
        setBlink(prev => !prev);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [status]);
  
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${
        status === "Available" 
          ? `bg-green-500 ${blink ? 'opacity-100' : 'opacity-50'}` 
          : status === "Beta"
          ? 'bg-yellow-500'
          : 'bg-gray-500'
      }`}></div>
      <span className="font-mono text-xs">{status.toUpperCase()}</span>
    </div>
  );
};

const FeatureShowcase = () => {
  const features = [
    {
      icon: Brain,
      title: "AI_POWERED_DETECTION",
      description: "Advanced machine learning models with 99.7% accuracy, trained on millions of phishing attempts",
      metrics: ["< 150ms response", "Real-time analysis", "Zero-day protection"],
      color: "cyan"
    },
    {
      icon: Zap,
      title: "LIGHTNING_FAST_PROTECTION",
      description: "Edge computing with on-device models for instant threat detection without latency",
      metrics: ["Edge processing", "40ms decisions", "Offline capable"],
      color: "yellow"
    },
    {
      icon: Shield,
      title: "MULTI_LAYER_SECURITY",
      description: "Comprehensive protection combining heuristics, ML models, and threat intelligence",
      metrics: ["URL analysis", "DOM inspection", "Visual similarity"],
      color: "red"
    },
    {
      icon: Globe,
      title: "GLOBAL_THREAT_INTEL",
      description: "Real-time data from worldwide threat feeds and collaborative security networks",
      metrics: ["195 countries", "50M+ daily scans", "Live updates"],
      color: "purple"
    },
    {
      icon: Eye,
      title: "VISUAL_ANALYSIS",
      description: "OCR and computer vision to detect brand impersonation and visual phishing tactics",
      metrics: ["Logo detection", "Layout analysis", "Brand matching"],
      color: "blue"
    },
    {
      icon: Lock,
      title: "PRIVACY_FIRST",
      description: "On-device processing ensures your browsing data stays private and secure",
      metrics: ["Local analysis", "No data collection", "GDPR compliant"],
      color: "green"
    }
  ];

  const integrations = [
    {
      name: "BROWSER_EXTENSION",
      icon: Smartphone,
      description: "Chrome, Firefox, Edge, Safari",
      status: "Available"
    },
    {
      name: "ENTERPRISE_API",
      icon: Server,
      description: "REST API for custom integrations",
      status: "Available"
    },
    {
      name: "MOBILE_SDK",
      icon: Smartphone,
      description: "iOS and Android libraries",
      status: "Coming Soon"
    },
    {
      name: "SLACK_INTEGRATION",
      icon: Users,
      description: "Team threat notifications",
      status: "Beta"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: "border-cyan-600 hover:border-cyan-500",
      yellow: "border-yellow-600 hover:border-yellow-500",
      red: "border-red-600 hover:border-red-500",
      purple: "border-purple-600 hover:border-purple-500",
      blue: "border-blue-600 hover:border-blue-500",
      green: "border-green-600 hover:border-green-500"
    };
    return colors[color] || colors.cyan;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Available": return "bg-green-700 text-green-100 border-green-600";
      case "Beta": return "bg-yellow-700 text-yellow-100 border-yellow-600";
      case "Coming Soon": return "bg-gray-700 text-gray-300 border-gray-600";
      default: return "bg-gray-700 text-gray-300 border-gray-600";
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-mono">
            <span className="text-green-400">&gt;</span> ADVANCED_SECURITY_FEATURES
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-mono">
            Enterprise-grade protection with cutting-edge AI technology
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge className="bg-gray-800 text-green-400 border-green-600 font-mono">
              <BarChart3 className="h-3 w-3 mr-1" />
              <HexMetric>99.7% ACCURACY</HexMetric>
            </Badge>
            <Badge className="bg-gray-800 text-cyan-400 border-cyan-600 font-mono">
              <Zap className="h-3 w-3 mr-1" />
              <HexMetric delay={200}>SUB-SECOND RESPONSE</HexMetric>
            </Badge>
            <Badge className="bg-gray-800 text-red-400 border-red-600 font-mono">
              <Shield className="h-3 w-3 mr-1" />
              <HexMetric delay={400}>ZERO-DAY PROTECTION</HexMetric>
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className={`bg-gray-900 border-gray-700 ${getColorClasses(feature.color)} transition-all duration-300 hover:bg-gray-800`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-gray-800 border border-gray-600">
                      <IconComponent className={`h-6 w-6 text-${feature.color}-400`} />
                    </div>
                    <CardTitle className="text-white font-mono text-sm">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <HexMetric delay={metricIndex * 100}>{metric.toUpperCase()}</HexMetric>
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
          <h3 className="text-2xl font-bold text-center mb-8 text-white font-mono">
            <span className="text-green-400">&gt;</span> PLATFORM_INTEGRATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <Card key={index} className="bg-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded bg-gray-800 border border-gray-600 mb-3">
                        <IconComponent className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h4 className="font-semibold mb-2 text-white font-mono text-sm">{integration.name}</h4>
                      <p className="text-sm text-gray-400 mb-3 font-mono">{integration.description}</p>
                      <div className="flex justify-center">
                        <Badge className={`${getStatusBadge(integration.status)} font-mono text-xs`}>
                          <StatusIndicator status={integration.status} />
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gray-900 border border-gray-700">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white font-mono">
              <span className="text-green-400">&gt;</span> READY_TO_SECURE_YOUR_ORGANIZATION?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
              Join thousands of organizations already protected by our AI-powered phishing detection platform. 
              Get started with a free trial and see the difference advanced security makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-700 hover:bg-green-600 text-white border border-green-600 font-mono"
              >
                INITIALIZE_TRIAL
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                className="bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 font-mono"
              >
                SCHEDULE_DEMO
              </Button>
            </div>
            
            {/* Terminal-style footer */}
            <div className="mt-8 p-4 bg-black rounded border border-gray-700">
              <div className="text-left">
                <div className="text-green-400 font-mono text-xs mb-1">user@security:~$ ./initialize_protection.sh</div>
                <div className="text-gray-400 font-mono text-xs">
                  <HexMetric delay={1000}>LOADING THREAT INTELLIGENCE... [████████████████] 100%</HexMetric>
                </div>
                <div className="text-green-400 font-mono text-xs mt-1">
                  <HexMetric delay={1500}>SYSTEM READY. PROTECTION ACTIVE.</HexMetric>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureShowcase;