import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Zap, 
  Globe, 
  Database,
  CheckCircle,
  Copy
} from "lucide-react";

const APIPreview = () => {
  const codeExample = `POST /v1/score
Authorization: Bearer <token>
Content-Type: application/json

{
  "url": "https://suspicious-site.com",
  "dom_facts": {
    "forms": 2,
    "iframed": false,
    "inputs": ["email", "password"]
  },
  "tenant": "org-123",
  "explain": true
}`;

  const responseExample = `{
  "risk": 0.89,
  "label": "phishing",
  "action": "block",
  "reasons": [
    "Brand impersonation: paypa1.com",
    "Domain age < 7 days",
    "Credential harvesting form"
  ],
  "model": "deep-2025-08-01",
  "processing_time_ms": 127,
  "ttl": 86400
}`;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Developer API
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrate our AI phishing detection directly into your applications with enterprise-grade APIs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* API Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Enterprise API Features</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/10">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Sub-150ms Response</h4>
                    <p className="text-sm text-muted-foreground">
                      Lightning-fast threat analysis with global edge deployment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-accent/10">
                  <div className="w-10 h-10 bg-gradient-safe rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-safe-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Global Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Multi-region deployment with 99.9% uptime SLA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/10">
                  <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Threat Intelligence</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time feeds from multiple threat intelligence sources
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-accent/10">
                  <div className="w-10 h-10 bg-gradient-safe rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-safe-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">SOC 2 Compliant</h4>
                    <p className="text-sm text-muted-foreground">
                      Enterprise security controls and compliance standards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20">
              <h4 className="font-semibold mb-4 text-foreground">API Pricing</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded bg-muted/20">
                  <div>
                    <p className="font-medium text-foreground">Free Tier</p>
                    <p className="text-xs text-muted-foreground">10K requests/month</p>
                  </div>
                  <Badge className="bg-safe text-safe-foreground">$0</Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded bg-muted/20">
                  <div>
                    <p className="font-medium text-foreground">Professional</p>
                    <p className="text-xs text-muted-foreground">1M requests/month</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">$99</Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded bg-muted/20">
                  <div>
                    <p className="font-medium text-foreground">Enterprise</p>
                    <p className="text-xs text-muted-foreground">Unlimited + SLA</p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">Custom</Badge>
                </div>
              </div>

              <Button className="w-full mt-4 bg-gradient-primary hover:shadow-cyber transition-all duration-300">
                Get API Key
              </Button>
            </Card>
          </div>

          {/* Code Examples */}
          <div>
            <Tabs defaultValue="request" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted/30">
                <TabsTrigger value="request" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Request
                </TabsTrigger>
                <TabsTrigger value="response" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Response
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="request">
                <Card className="p-0 overflow-hidden bg-card/80 backdrop-blur-sm border border-primary/20">
                  <div className="flex items-center justify-between p-4 bg-muted/20 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">POST Request</span>
                    </div>
                    <Button size="sm" variant="outline" className="border-primary/30 hover:border-primary">
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <div className="p-4 bg-muted/10">
                    <pre className="text-sm text-foreground overflow-x-auto">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="response">
                <Card className="p-0 overflow-hidden bg-card/80 backdrop-blur-sm border border-primary/20">
                  <div className="flex items-center justify-between p-4 bg-muted/20 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-safe" />
                      <span className="font-medium text-foreground">200 Response</span>
                    </div>
                    <Button size="sm" variant="outline" className="border-primary/30 hover:border-primary">
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <div className="p-4 bg-muted/10">
                    <pre className="text-sm text-foreground overflow-x-auto">
                      <code>{responseExample}</code>
                    </pre>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Quick Integration */}
            <Card className="mt-6 p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
              <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Quick Integration
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get started in minutes with our SDKs and comprehensive documentation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-accent/30 text-accent">JavaScript</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">Python</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">Go</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">PHP</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">cURL</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIPreview;