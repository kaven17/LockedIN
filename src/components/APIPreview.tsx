import { useState, useEffect } from "react";
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

// API response simulator
const APISimulator = ({ delay = 0 }) => {
  const [status, setStatus] = useState('idle');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus('processing');
      setTimeout(() => setStatus('complete'), 2000);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  const getStatusText = () => {
    switch (status) {
      case 'processing': return 'ANALYZING_THREAT...';
      case 'complete': return 'RESPONSE_READY';
      default: return 'API_IDLE';
    }
  };
  
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${
        status === 'processing' ? 'bg-yellow-500 animate-pulse' :
        status === 'complete' ? 'bg-green-500' : 'bg-gray-500'
      }`}></div>
      <span className="font-mono text-xs text-gray-400">{getStatusText()}</span>
    </div>
  );
};

// Animated pricing display
const AnimatedPrice = ({ price, delay = 0 }) => {
  const [displayPrice, setDisplayPrice] = useState("$XXX");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let chars = "$000";
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayPrice(
          price.split("").map((char, index) => {
            if (index < iteration) return char;
            return Math.floor(Math.random() * 10);
          }).join("")
        );
        
        if (iteration >= price.length) {
          clearInterval(interval);
          setDisplayPrice(price);
        }
        iteration += 0.3;
      }, 100);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [price, delay]);
  
  return <span className="font-mono">{displayPrice}</span>;
};

const APIPreview = () => {
  const codeExample = `POST /v1/threat_analysis
Authorization: Bearer <API_KEY>
Content-Type: application/json
X-Tenant-ID: org-123

{
  "target_url": "https://suspicious-site.com",
  "dom_analysis": {
    "form_count": 2,
    "iframe_detected": false,
    "input_fields": ["email", "password"]
  },
  "client_metadata": {
    "user_agent": "Mozilla/5.0...",
    "ip_geolocation": "US"
  },
  "analysis_depth": "deep",
  "return_explanation": true
}`;

  const responseExample = `{
  "threat_assessment": {
    "risk_score": 0.89,
    "classification": "PHISHING_ATTEMPT",
    "action_recommended": "BLOCK_IMMEDIATELY",
    "confidence_level": 0.94
  },
  "threat_indicators": [
    "Brand impersonation: paypa1.com similarity 92%",
    "Domain registration: < 7 days",
    "Credential harvesting form detected",
    "SSL certificate anomaly detected"
  ],
  "model_info": {
    "version": "neural-net-v2025.08.01",
    "processing_time_ms": 127,
    "edge_node": "us-east-1"
  },
  "cache_info": {
    "ttl_seconds": 86400,
    "threat_db_version": "2025.08.25.1400"
  }
}`;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white font-mono">
            <span className="text-green-400">&gt;</span> DEVELOPER_API
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Integrate our AI phishing detection directly into your applications with enterprise-grade APIs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* API Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white font-mono">
                <span className="text-green-400">&gt;</span> ENTERPRISE_API_FEATURES
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-cyan-600 transition-colors">
                  <div className="w-10 h-10 bg-cyan-700 rounded border border-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-mono">SUB_150MS_RESPONSE</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Lightning-fast threat analysis with global edge deployment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-green-600 transition-colors">
                  <div className="w-10 h-10 bg-green-700 rounded border border-green-600 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-mono">GLOBAL_COVERAGE</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Multi-region deployment with 99.9% uptime SLA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-purple-600 transition-colors">
                  <div className="w-10 h-10 bg-purple-700 rounded border border-purple-600 flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-mono">THREAT_INTELLIGENCE</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Real-time feeds from multiple threat intelligence sources
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-yellow-600 transition-colors">
                  <div className="w-10 h-10 bg-yellow-700 rounded border border-yellow-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-mono">SOC_2_COMPLIANT</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Enterprise security controls and compliance standards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Card className="p-6 bg-gray-900 border border-gray-700">
              <h4 className="font-semibold mb-4 text-white font-mono">API_PRICING_TIERS:</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded bg-gray-800 border border-gray-600">
                  <div>
                    <p className="font-medium text-white font-mono">FREE_TIER</p>
                    <p className="text-xs text-gray-400 font-mono">10K requests/month</p>
                  </div>
                  <Badge className="bg-green-700 text-green-100 border-green-600 font-mono">
                    <AnimatedPrice price="$0" delay={0} />
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded bg-gray-800 border border-gray-600">
                  <div>
                    <p className="font-medium text-white font-mono">PROFESSIONAL</p>
                    <p className="text-xs text-gray-400 font-mono">1M requests/month</p>
                  </div>
                  <Badge className="bg-cyan-700 text-cyan-100 border-cyan-600 font-mono">
                    <AnimatedPrice price="$99" delay={200} />
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded bg-gray-800 border border-gray-600">
                  <div>
                    <p className="font-medium text-white font-mono">ENTERPRISE</p>
                    <p className="text-xs text-gray-400 font-mono">Unlimited + SLA</p>
                  </div>
                  <Badge className="bg-yellow-700 text-yellow-100 border-yellow-600 font-mono">
                    CUSTOM
                  </Badge>
                </div>
              </div>

              <Button className="w-full mt-4 bg-green-700 hover:bg-green-600 text-white font-mono border border-green-600">
                GENERATE_API_KEY
              </Button>
              
              {/* API Status */}
              <div className="mt-4 p-3 bg-black rounded border border-gray-700">
                <APISimulator delay={1000} />
              </div>
            </Card>
          </div>

          {/* Code Examples */}
          <div>
            <Tabs defaultValue="request" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-800 border border-gray-700">
                <TabsTrigger 
                  value="request" 
                  className="data-[state=active]:bg-cyan-700 data-[state=active]:text-white font-mono"
                >
                  REQUEST
                </TabsTrigger>
                <TabsTrigger 
                  value="response" 
                  className="data-[state=active]:bg-green-700 data-[state=active]:text-white font-mono"
                >
                  RESPONSE
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="request">
                <Card className="p-0 overflow-hidden bg-gray-900 border border-gray-700">
                  <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-cyan-400" />
                      <span className="font-medium text-white font-mono">POST_REQUEST</span>
                    </div>
                    <Button size="sm" className="bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 font-mono text-xs">
                      <Copy className="w-3 h-3 mr-1" />
                      COPY
                    </Button>
                  </div>
                  <div className="p-4 bg-black">
                    <pre className="text-sm text-green-400 overflow-x-auto font-mono">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="response">
                <Card className="p-0 overflow-hidden bg-gray-900 border border-gray-700">
                  <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="font-medium text-white font-mono">200_RESPONSE</span>
                    </div>
                    <Button size="sm" className="bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 font-mono text-xs">
                      <Copy className="w-3 h-3 mr-1" />
                      COPY
                    </Button>
                  </div>
                  <div className="p-4 bg-black">
                    <pre className="text-sm text-cyan-400 overflow-x-auto font-mono">
                      <code>{responseExample}</code>
                    </pre>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Quick Integration */}
            <Card className="mt-6 p-6 bg-gray-900 border border-gray-700">
              <h4 className="font-semibold mb-3 text-white flex items-center gap-2 font-mono">
                <Zap className="w-4 h-4 text-yellow-400" />
                QUICK_INTEGRATION
              </h4>
              <p className="text-sm text-gray-400 mb-4 font-mono">
                Get started in minutes with our SDKs and comprehensive documentation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-gray-800 text-cyan-400 border-cyan-600 font-mono">JAVASCRIPT</Badge>
                <Badge className="bg-gray-800 text-green-400 border-green-600 font-mono">PYTHON</Badge>
                <Badge className="bg-gray-800 text-blue-400 border-blue-600 font-mono">GO</Badge>
                <Badge className="bg-gray-800 text-purple-400 border-purple-600 font-mono">PHP</Badge>
                <Badge className="bg-gray-800 text-yellow-400 border-yellow-600 font-mono">CURL</Badge>
              </div>
              
              {/* Terminal Integration Example */}
              <div className="p-3 bg-black rounded border border-gray-700">
                <div className="text-green-400 font-mono text-xs">
                  dev@workstation:~$ npm install @phishing-blocker/sdk
                  <br />
                  <span className="text-gray-400">Installing SDK... [████████] Complete</span>
                  <br />
                  <span className="text-cyan-400">Ready for integration. Documentation: /docs/quickstart</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIPreview;