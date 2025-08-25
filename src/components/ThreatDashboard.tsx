import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Activity, 
  Users, 
  Globe,
  Eye,
  BarChart3
} from "lucide-react";

interface ThreatEvent {
  id: string;
  url: string;
  risk: number;
  action: 'blocked' | 'warned' | 'allowed';
  timestamp: Date;
  location: string;
}

const ThreatDashboard = () => {
  const [threats, setThreats] = useState<ThreatEvent[]>([]);
  const [stats] = useState({
    blocked: 1247,
    warned: 89,
    analyzed: 45392,
    activeUsers: 2847
  });

  // Simulate real-time threat updates
  useEffect(() => {
    const generateThreat = (): ThreatEvent => ({
      id: Math.random().toString(36).substr(2, 9),
      url: [
        'paypa1-security.com',
        'amazon-verify.net', 
        'apple-icloud-signin.org',
        'microsoft-office365.info',
        'bank-of-america-secure.co'
      ][Math.floor(Math.random() * 5)],
      risk: Math.random(),
      action: ['blocked', 'warned', 'allowed'][Math.floor(Math.random() * 3)] as any,
      timestamp: new Date(),
      location: ['US', 'UK', 'DE', 'IN', 'CA'][Math.floor(Math.random() * 5)]
    });

    const interval = setInterval(() => {
      setThreats(prev => [generateThreat(), ...prev.slice(0, 9)]);
    }, 2000);

    // Initialize with some data
    setThreats(Array.from({ length: 10 }, generateThreat));

    return () => clearInterval(interval);
  }, []);

  const getRiskBadge = (risk: number, action: string) => {
    if (action === 'blocked') return <Badge className="bg-danger text-danger-foreground">High Risk</Badge>;
    if (action === 'warned') return <Badge className="bg-warning text-warning-foreground">Suspicious</Badge>;
    return <Badge className="bg-safe text-safe-foreground">Safe</Badge>;
  };

  const getActionIcon = (action: string) => {
    if (action === 'blocked') return <Shield className="w-4 h-4 text-danger" />;
    if (action === 'warned') return <AlertTriangle className="w-4 h-4 text-warning" />;
    return <CheckCircle className="w-4 h-4 text-safe" />;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Real-Time Threat Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor live phishing attempts, analyze threat patterns, and protect your users with enterprise-grade security
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-danger/10 to-danger/5 border border-danger/20 hover:shadow-threat transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.blocked.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Threats Blocked</p>
              </div>
              <Shield className="w-8 h-8 text-danger" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 hover:shadow-[0_0_30px_hsl(var(--warning)/0.3)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.warned}</p>
                <p className="text-sm text-muted-foreground">Warnings Issued</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-warning" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-cyber transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.analyzed.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Sites Analyzed</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:shadow-safe transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.activeUsers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Protected Users</p>
              </div>
              <Users className="w-8 h-8 text-accent" />
            </div>
          </Card>
        </div>

        {/* Live Threat Feed */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 hover:shadow-cyber transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-primary animate-pulse-glow" />
              <h3 className="text-2xl font-semibold text-foreground">Live Threat Feed</h3>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            </div>
            <Button variant="outline" size="sm" className="border-primary/50 hover:border-primary">
              <Eye className="w-4 h-4 mr-2" />
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {threats.map((threat) => (
              <div 
                key={threat.id} 
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {getActionIcon(threat.action)}
                  <div>
                    <p className="font-medium text-foreground">{threat.url}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-sm text-muted-foreground">
                        Risk: {(threat.risk * 100).toFixed(1)}%
                      </p>
                      <span className="text-muted-foreground">•</span>
                      <p className="text-sm text-muted-foreground">
                        {threat.timestamp.toLocaleTimeString()}
                      </p>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        <span className="text-sm text-muted-foreground">{threat.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {getRiskBadge(threat.risk, threat.action)}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ThreatDashboard;