import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, AlertTriangle, CheckCircle, Globe, Clock, Eye, ExternalLink } from "lucide-react";
import { useToast } from "./ui/use-toast";

const URLAnalyzer = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const sampleThreats = [
    ["Domain spoofing", "Credential harvesting", "Brand impersonation"],
    ["Suspicious domain age", "Missing security headers", "Unusual redirect patterns"],
    ["Typosquatting detected", "Homograph attack", "SSL certificate anomaly"],
    ["Malicious JavaScript", "Hidden form submissions", "Cryptocurrency mining"]
  ];

  const analyzeUrl = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to analyze",
        variant: "destructive"
      });
      return;
    }
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL starting with http:// or https://",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate realistic API analysis
    setTimeout(() => {
      const riskScore = Math.random();
      const isSafe = riskScore < 0.3;
      const isPhishing = riskScore > 0.7;
      const threatIndex = Math.floor(Math.random() * sampleThreats.length);
      
      setResult({
        url,
        riskScore,
        status: isSafe ? "safe" : isPhishing ? "danger" : "warning",
        label: isSafe ? "Safe" : isPhishing ? "Phishing Detected" : "Suspicious Activity",
        threats: isPhishing ? sampleThreats[threatIndex] : 
                 !isSafe ? sampleThreats[threatIndex].slice(0, 2) : [],
        details: {
          domainAge: Math.floor(Math.random() * 365) + " days",
          sslStatus: Math.random() > 0.2 ? "Valid (Grade A)" : "Invalid/Missing",
          reputation: isSafe ? "Trusted" : isPhishing ? "Blacklisted" : "Unknown",
          responseTime: Math.floor(Math.random() * 150) + 50 + "ms",
          lastScanned: "Just now"
        },
        modelVersion: "v2025.1.2",
        confidence: Math.floor(riskScore * 100)
      });
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: `URL analyzed with ${Math.floor(riskScore * 100)}% risk score`,
      });
    }, 1500 + Math.random() * 1000);
  };

  const getRiskColor = (status: string) => {
    switch (status) {
      case "safe": return "text-safe";
      case "warning": return "text-warning";
      case "danger": return "text-danger";
      default: return "text-muted-foreground";
    }
  };

  const getRiskIcon = (status: string) => {
    switch (status) {
      case "safe": return <CheckCircle className="h-5 w-5 text-safe" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "danger": return <Shield className="h-5 w-5 text-danger" />;
      default: return <Globe className="h-5 w-5" />;
    }
  };

  const getRiskGradient = (status: string) => {
    switch (status) {
      case "safe": return "from-safe/20 to-safe/5";
      case "warning": return "from-warning/20 to-warning/5";
      case "danger": return "from-danger/20 to-danger/5";
      default: return "from-muted/20 to-muted/5";
    }
  };

  const testUrls = [
    "https://paypal-verification.suspicious-domain.com",
    "https://amazon-security-check.fake-site.org",
    "https://microsoft-login.phishing-example.net"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Real-Time URL Analysis
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Test our AI-powered phishing detection engine with sub-second response times
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-muted-foreground">Try these examples:</span>
            {testUrls.map((testUrl, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setUrl(testUrl)}
                className="text-xs"
              >
                Test URL {index + 1}
              </Button>
            ))}
          </div>
        </div>

        <Card className="shadow-cyber border-primary/20 bg-gradient-to-br from-card to-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary animate-pulse-glow" />
              Advanced Threat Scanner
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <Input
                placeholder="Enter URL to analyze (e.g., https://suspicious-site.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-background/50"
                onKeyPress={(e) => e.key === 'Enter' && analyzeUrl()}
              />
              <Button 
                onClick={analyzeUrl}
                disabled={!url || isAnalyzing}
                className="bg-gradient-primary hover:opacity-90 min-w-[120px]"
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Scanning...
                  </div>
                ) : (
                  <>
                    <Shield className="h-4 w-4 mr-2" />
                    Analyze
                  </>
                )}
              </Button>
            </div>

            {result && (
              <div className="space-y-6 animate-fade-in">
                <div className={`p-6 rounded-lg border bg-gradient-to-br ${getRiskGradient(result.status)} border-${result.status}/30`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getRiskIcon(result.status)}
                      <div>
                        <h3 className="text-lg font-semibold">{result.label}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          {result.url}
                          <ExternalLink className="h-3 w-3" />
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={result.status === "safe" ? "default" : "destructive"}
                        className={`${getRiskColor(result.status)} font-mono text-lg px-3 py-1`}
                      >
                        {result.confidence}% Risk
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        Model: {result.modelVersion}
                      </p>
                    </div>
                  </div>

                  {result.threats.length > 0 && (
                    <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                      <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Threat Indicators ({result.threats.length})
                      </h4>
                      <div className="grid gap-2">
                        {result.threats.map((threat: string, index: number) => (
                          <div key={index} className="flex items-center gap-2 text-sm p-2 rounded bg-destructive/5">
                            <div className="w-2 h-2 rounded-full bg-destructive"></div>
                            <span className="font-medium">{threat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-4 rounded-lg border bg-card/50 text-center hover:bg-card transition-colors">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Domain Age</p>
                    <p className="font-semibold text-sm">{result.details.domainAge}</p>
                  </div>
                  <div className="p-4 rounded-lg border bg-card/50 text-center hover:bg-card transition-colors">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">SSL Status</p>
                    <p className="font-semibold text-sm">{result.details.sslStatus}</p>
                  </div>
                  <div className="p-4 rounded-lg border bg-card/50 text-center hover:bg-card transition-colors">
                    <Globe className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Reputation</p>
                    <p className="font-semibold text-sm">{result.details.reputation}</p>
                  </div>
                  <div className="p-4 rounded-lg border bg-card/50 text-center hover:bg-card transition-colors">
                    <Eye className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Response Time</p>
                    <p className="font-semibold text-sm">{result.details.responseTime}</p>
                  </div>
                  <div className="p-4 rounded-lg border bg-card/50 text-center hover:bg-card transition-colors">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Last Scan</p>
                    <p className="font-semibold text-sm">{result.details.lastScanned}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default URLAnalyzer;