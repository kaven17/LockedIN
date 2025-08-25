import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, AlertTriangle, TrendingUp, Globe, Clock, Users, Activity, Target } from "lucide-react";

const ThreatDashboard = () => {
  const [liveStats, setLiveStats] = useState({
    threatsBlocked: 847293,
    activeUsers: 2400000,
    detectionAccuracy: 99.7,
    responseTime: 127
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 5) + 1,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10),
        detectionAccuracy: 99.7 + (Math.random() - 0.5) * 0.1,
        responseTime: 120 + Math.floor(Math.random() * 20)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Threats Blocked Today",
      value: liveStats.threatsBlocked.toLocaleString(),
      change: "+12.5%",
      icon: Shield,
      color: "text-safe",
      gradient: "from-safe/20 to-safe/5"
    },
    {
      title: "Active Users Protected",
      value: `${(liveStats.activeUsers / 1000000).toFixed(1)}M`,
      change: "+8.2%",
      icon: Users,
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Detection Accuracy",
      value: `${liveStats.detectionAccuracy.toFixed(1)}%`,
      change: "+0.3%",
      icon: Target,
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      title: "Avg Response Time",
      value: `${liveStats.responseTime}ms`,
      change: "-15ms",
      icon: Clock,
      color: "text-warning",
      gradient: "from-warning/20 to-warning/5"
    }
  ];

  const recentThreats = [
    {
      domain: "paypaI-secure.verify-account.com",
      risk: "High",
      type: "Brand Impersonation",
      blocked: "2 min ago",
      users: 23,
      country: "🇺🇸 US"
    },
    {
      domain: "microsoft-365-renewal.urgent-notice.net",
      risk: "Critical",
      type: "Credential Harvesting",
      blocked: "5 min ago",
      users: 156,
      country: "🇷🇺 RU"
    },
    {
      domain: "amazon-prize-winner.claim-now.org",
      risk: "Medium",
      type: "Phishing Scam",
      blocked: "8 min ago",
      users: 67,
      country: "🇨🇳 CN"
    },
    {
      domain: "crypto-wallet-recovery.secure-portal.co",
      risk: "High",
      type: "Cryptocurrency Theft",
      blocked: "12 min ago",
      users: 89,
      country: "🇳🇬 NG"
    },
    {
      domain: "bank-security-alert.verify-identity.info",
      risk: "Critical",
      type: "Banking Fraud",
      blocked: "15 min ago",
      users: 234,
      country: "🇧🇷 BR"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "critical": return "bg-danger text-danger-foreground border-danger/30";
      case "high": return "bg-warning text-warning-foreground border-warning/30";
      case "medium": return "bg-secondary text-secondary-foreground border-secondary/30";
      default: return "bg-muted text-muted-foreground border-muted/30";
    }
  };

  const globalMetrics = [
    { label: "Countries Protected", value: "195", icon: Globe },
    { label: "Daily Scans", value: "50M+", icon: Activity },
    { label: "ML Models Active", value: "12", icon: TrendingUp },
    { label: "Zero-Day Detection", value: "94%", icon: Shield }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            Global Threat Intelligence
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Real-time monitoring and protection across millions of users worldwide
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-safe rounded-full animate-pulse"></div>
            <span>Live data updating every 3 seconds</span>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-cyber`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`h-8 w-8 ${stat.color} animate-pulse-glow`} />
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-1 font-mono">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Global Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {globalMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/5">
                <CardContent className="p-4 text-center">
                  <IconComponent className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-lg font-bold">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Threats */}
        <Card className="shadow-cyber border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning animate-pulse" />
              Live Threat Feed
              <Badge variant="destructive" className="ml-2 animate-pulse">
                {recentThreats.length} Active
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentThreats.map((threat, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-gradient-to-r from-card/50 to-muted/10 hover:from-muted/20 hover:to-card/50 transition-all duration-300 group">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <code className="text-sm font-mono bg-muted/50 px-2 py-1 rounded group-hover:bg-primary/10 transition-colors">
                        {threat.domain}
                      </code>
                      <Badge className={`${getRiskColor(threat.risk)} text-xs border`}>
                        {threat.risk}
                      </Badge>
                      <span className="text-xs">{threat.country}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        {threat.type}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {threat.users} users protected
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {threat.blocked}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-safe" />
                    <span className="text-sm font-medium text-safe">Blocked</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ThreatDashboard;