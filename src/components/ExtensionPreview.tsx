import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  ArrowLeft, 
  ExternalLink,
  Chrome,
  Globe,
  Download
} from "lucide-react";

const ExtensionPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Browser Extension
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamless protection that works across all your favorite browsers. Real-time blocking with zero configuration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Extension Interface Mockup */}
          <div className="space-y-8">
            {/* Blocked Page Interface */}
            <Card className="p-0 overflow-hidden bg-danger/5 border border-danger/20 hover:shadow-threat transition-all duration-300">
              <div className="bg-danger p-4 text-danger-foreground">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold">Threat Blocked</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    This site has been identified as a phishing attempt
                  </h3>
                  <p className="text-muted-foreground">
                    paypa1-security.com appears to be impersonating PayPal to steal your credentials.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-foreground">Why was this blocked?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-danger rounded-full"></div>
                      <span className="text-muted-foreground">Brand impersonation detected (92% similarity)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-danger rounded-full"></div>
                      <span className="text-muted-foreground">Domain registered 2 days ago</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-danger rounded-full"></div>
                      <span className="text-muted-foreground">Credential harvesting form detected</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-gradient-primary hover:shadow-cyber transition-all duration-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back to Safety
                  </Button>
                  <Button variant="outline" size="sm" className="border-muted-foreground/30 text-muted-foreground">
                    Report False Positive
                  </Button>
                </div>
              </div>
            </Card>

            {/* Warning Interface */}
            <Card className="p-0 overflow-hidden bg-warning/5 border border-warning/20 hover:shadow-[0_0_30px_hsl(var(--warning)/0.3)] transition-all duration-300">
              <div className="bg-warning p-3 text-warning-foreground">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">Suspicious Site Detected</span>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  This site shows suspicious characteristics. Proceed with caution.
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge className="bg-warning/20 text-warning border border-warning/30">
                    Risk Score: 67%
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-warning/30 text-warning hover:bg-warning/10">
                      Continue Anyway
                    </Button>
                    <Button size="sm" className="bg-gradient-primary">
                      Go Back
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Features and Download */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Enterprise-Grade Protection
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/10">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Real-Time Blocking</h4>
                    <p className="text-sm text-muted-foreground">
                      Instant protection with sub-150ms detection latency
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-accent/10">
                  <div className="w-10 h-10 bg-gradient-safe rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-safe-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Smart Warnings</h4>
                    <p className="text-sm text-muted-foreground">
                      Contextual alerts with detailed threat explanations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/10">
                  <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Zero Configuration</h4>
                    <p className="text-sm text-muted-foreground">
                      Works out of the box with automatic updates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Support */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20">
              <h4 className="font-semibold mb-4 text-foreground">Available For All Browsers</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <Chrome className="w-6 h-6 text-foreground" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Chrome</p>
                    <p className="text-xs text-muted-foreground">Web Store</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <Globe className="w-6 h-6 text-foreground" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Firefox</p>
                    <p className="text-xs text-muted-foreground">Add-ons</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-primary hover:shadow-cyber transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Install Extension
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionPreview;