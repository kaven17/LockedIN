import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Globe,
  Eye,
  Brain,
  Zap
} from "lucide-react";

interface AnalysisResult {
  url: string;
  riskScore: number;
  label: 'phishing' | 'suspicious' | 'safe';
  action: 'block' | 'warn' | 'allow';
  reasons: string[];
  processingTime: number;
  features: {
    domainAge: number;
    tlsValid: boolean;
    brandSimilarity: number;
    suspiciousElements: number;
  };
}

const URLAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyzeURL = async () => {
    if (!url.trim()) return;
    
    setAnalyzing(true);
    
    // Simulate API call with realistic processing time
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Generate mock analysis result
    const isPhishing = url.includes('paypal') || url.includes('amazon') || url.includes('apple');
    const riskScore = isPhishing ? Math.random() * 0.4 + 0.6 : Math.random() * 0.3;
    
    const mockResult: AnalysisResult = {
      url,
      riskScore,
      label: riskScore > 0.7 ? 'phishing' : riskScore > 0.3 ? 'suspicious' : 'safe',
      action: riskScore > 0.7 ? 'block' : riskScore > 0.3 ? 'warn' : 'allow',
      reasons: riskScore > 0.7 
        ? ['Brand impersonation detected', 'Suspicious domain age', 'Hidden form fields', 'External redirects']
        : riskScore > 0.3
        ? ['Recently registered domain', 'Unusual TLD usage']
        : ['Legitimate domain', 'Valid TLS certificate', 'No suspicious patterns'],
      processingTime: Math.floor(Math.random() * 50) + 80,
      features: {
        domainAge: Math.floor(Math.random() * 365) + 1,
        tlsValid: riskScore < 0.5,
        brandSimilarity: isPhishing ? Math.random() * 0.3 + 0.7 : Math.random() * 0.2,
        suspiciousElements: isPhishing ? Math.floor(Math.random() * 5) + 2 : Math.floor(Math.random() * 2)
      }
    };
    
    setResult(mockResult);
    setAnalyzing(false);
  };

  const getRiskColor = (score: number) => {
    if (score > 0.7) return 'text-danger';
    if (score > 0.3) return 'text-warning';
    return 'text-safe';
  };

  const getRiskBadge = (label: string) => {
    switch (label) {
      case 'phishing':
        return <Badge className="bg-danger text-danger-foreground">High Risk - Phishing</Badge>;
      case 'suspicious':
        return <Badge className="bg-warning text-warning-foreground">Suspicious</Badge>;
      default:
        return <Badge className="bg-safe text-safe-foreground">Safe</Badge>;
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'block':
        return <Shield className="w-5 h-5 text-danger" />;
      case 'warn':
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      default:
        return <CheckCircle className="w-5 h-5 text-safe" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            URL Security Analyzer
          </h2>
          <p className="text-xl text-muted-foreground">
            Test our AI-powered phishing detection engine with any URL
          </p>
        </div>

        {/* URL Input */}
        <Card className="p-8 mb-8 bg-card/80 backdrop-blur-sm border border-primary/20 hover:shadow-cyber transition-all duration-300">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter URL to analyze (e.g., https://suspicious-site.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-lg py-6 bg-muted/30 border-border/50 focus:border-primary"
                onKeyPress={(e) => e.key === 'Enter' && analyzeURL()}
              />
            </div>
            <Button
              onClick={analyzeURL}
              disabled={analyzing || !url.trim()}
              className="px-8 py-6 bg-gradient-primary hover:shadow-cyber transition-all duration-300"
            >
              {analyzing ? (
                <>
                  <Brain className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Analyze
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Analysis Result */}
        {result && (
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-primary/20 hover:shadow-cyber transition-all duration-300">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getActionIcon(result.action)}
                  <h3 className="text-2xl font-semibold text-foreground">Analysis Complete</h3>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{result.processingTime}ms</span>
                </div>
              </div>

              {/* URL and Risk Score */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground truncate">{result.url}</p>
                  {getRiskBadge(result.label)}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Risk Score</span>
                      <span className={`text-sm font-semibold ${getRiskColor(result.riskScore)}`}>
                        {(result.riskScore * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          result.riskScore > 0.7 
                            ? 'bg-gradient-to-r from-danger/60 to-danger' 
                            : result.riskScore > 0.3
                            ? 'bg-gradient-to-r from-warning/60 to-warning'
                            : 'bg-gradient-to-r from-safe/60 to-safe'
                        }`}
                        style={{ width: `${result.riskScore * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reasons */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Detection Reasons
                </h4>
                <div className="grid gap-2">
                  {result.reasons.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded bg-muted/20">
                      <div className={`w-2 h-2 rounded-full ${
                        result.label === 'phishing' ? 'bg-danger' : 
                        result.label === 'suspicious' ? 'bg-warning' : 'bg-safe'
                      }`}></div>
                      <span className="text-sm text-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Features */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Technical Analysis
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 rounded bg-muted/20 border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1">Domain Age</p>
                    <p className="font-semibold text-foreground">{result.features.domainAge} days</p>
                  </div>
                  <div className="p-3 rounded bg-muted/20 border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1">TLS Certificate</p>
                    <p className={`font-semibold ${result.features.tlsValid ? 'text-safe' : 'text-danger'}`}>
                      {result.features.tlsValid ? 'Valid' : 'Invalid'}
                    </p>
                  </div>
                  <div className="p-3 rounded bg-muted/20 border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1">Brand Similarity</p>
                    <p className={`font-semibold ${result.features.brandSimilarity > 0.5 ? 'text-warning' : 'text-safe'}`}>
                      {(result.features.brandSimilarity * 100).toFixed(0)}%
                    </p>
                  </div>
                  <div className="p-3 rounded bg-muted/20 border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1">Suspicious Elements</p>
                    <p className={`font-semibold ${result.features.suspiciousElements > 2 ? 'text-danger' : 'text-safe'}`}>
                      {result.features.suspiciousElements}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Sample URLs */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">Try these sample URLs:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'https://paypa1-security.com/login',
              'https://amazon-verify.net/account',
              'https://apple-icloud-signin.org',
              'https://google.com'
            ].map((sampleUrl) => (
              <Button
                key={sampleUrl}
                variant="outline"
                size="sm"
                onClick={() => setUrl(sampleUrl)}
                className="text-xs border-primary/30 hover:border-primary"
              >
                {sampleUrl.replace('https://', '')}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default URLAnalyzer;