import { useState, useEffect } from "react";
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

// Threat scanner animation
const ThreatScanner = ({ children, scanDelay = 0 }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        setScanComplete(true);
      }, 2000);
    }, scanDelay);

    return () => clearTimeout(timeout);
  }, [scanDelay]);

  return (
    <span className={`font-mono ${isScanning ? 'text-yellow-400' : scanComplete ? 'text-red-400' : 'text-gray-400'}`}>
      {isScanning ? 'SCANNING...' : scanComplete ? children : 'PENDING'}
    </span>
  );
};

// Blinking status indicator
const StatusLight = ({ status }) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    switch (status) {
      case 'blocked': return blink ? 'bg-red-500' : 'bg-red-800';
      case 'warning': return blink ? 'bg-yellow-500' : 'bg-yellow-800';
      default: return 'bg-gray-500';
    }
  };

  return <div className={`w-2 h-2 rounded-full ${getColor()}`}></div>;
};

const ExtensionPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white font-mono">
            <span className="text-green-400">&gt;</span> BROWSER_EXTENSION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Seamless protection that works across all your favorite browsers. Real-time blocking with zero configuration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Extension Interface Mockup */}
          <div className="space-y-8">
            {/* Blocked Page Interface */}
            <Card className="p-0 overflow-hidden bg-gray-900 border border-red-600">
              <div className="bg-red-700 p-4 text-white">
                <div className="flex items-center gap-3">
                  <StatusLight status="blocked" />
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold font-mono">THREAT_BLOCKED</span>
                </div>
              </div>
              
              <div className="p-6 bg-gray-900">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 font-mono">
                    PHISHING_ATTEMPT_DETECTED
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    paypa1-security.com appears to be impersonating PayPal to steal your credentials.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-white font-mono">THREAT_ANALYSIS:</h4>
                  <div className="space-y-2 bg-black p-3 rounded border border-gray-700">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <StatusLight status="blocked" />
                      <ThreatScanner scanDelay={0}>Brand impersonation detected (92% similarity)</ThreatScanner>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <StatusLight status="blocked" />
                      <ThreatScanner scanDelay={500}>Domain registered 2 days ago</ThreatScanner>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <StatusLight status="blocked" />
                      <ThreatScanner scanDelay={1000}>Credential harvesting form detected</ThreatScanner>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-green-700 hover:bg-green-600 text-white font-mono border border-green-600">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    RETURN_TO_SAFETY
                  </Button>
                  <Button className="bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 font-mono text-xs">
                    REPORT_FALSE_POSITIVE
                  </Button>
                </div>
              </div>
            </Card>

            {/* Warning Interface */}
            <Card className="p-0 overflow-hidden bg-gray-900 border border-yellow-600">
              <div className="bg-yellow-700 p-3 text-white">
                <div className="flex items-center gap-3">
                  <StatusLight status="warning" />
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium font-mono">SUSPICIOUS_SITE_DETECTED</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-900">
                <p className="text-sm text-gray-400 mb-4 font-mono">
                  THREAT_LEVEL: MEDIUM | PROCEED_WITH_CAUTION
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge className="bg-yellow-700 text-yellow-100 border-yellow-600 font-mono">
                    RISK_SCORE: 67%
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 font-mono text-xs">
                      CONTINUE_ANYWAY
                    </Button>
                    <Button size="sm" className="bg-green-700 hover:bg-green-600 text-white font-mono text-xs">
                      GO_BACK
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Features and Download */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white font-mono">
                <span className="text-green-400">&gt;</span> ENTERPRISE_GRADE_PROTECTION
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-cyan-600 transition-colors">
                  <div className="w-10 h-10 bg-cyan-700 rounded border border-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-mono">REAL_TIME_BLOCKING</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Instant protection with sub-150ms detection latency
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-yellow-600 transition-colors">
                  <div className="w-10 h-10 bg-yellow-700 rounded border border-yellow-600 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-mono">SMART_WARNINGS</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Contextual alerts with detailed threat explanations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-green-600 transition-colors">
                  <div className="w-10 h-10 bg-green-700 rounded border border-green-600 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-mono">ZERO_CONFIGURATION</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Works out of the box with automatic updates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Support */}
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">
              <h4 className="font-semibold mb-4 text-white font-mono">BROWSER_COMPATIBILITY:</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded bg-gray-800 border border-gray-600">
                  <Chrome className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-medium text-sm text-white font-mono">CHROME</p>
                    <p className="text-xs text-gray-400 font-mono">WEB_STORE</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded bg-gray-800 border border-gray-600">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-medium text-sm text-white font-mono">FIREFOX</p>
                    <p className="text-xs text-gray-400 font-mono">ADD_ONS</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-600 text-white border border-green-600 font-mono">
                <Download className="w-4 h-4 mr-2" />
                INSTALL_EXTENSION
              </Button>
              
              {/* Terminal output */}
              <div className="mt-4 p-3 bg-black rounded border border-gray-700">
                <div className="text-green-400 font-mono text-xs">
                  user@browser:~$ ./install_protection.sh
                  <br />
                  <span className="text-gray-400">Installing security extension... [████████] 100%</span>
                  <br />
                  <span className="text-green-400">Protection active. Monitoring enabled.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionPreview;