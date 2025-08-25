import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, AlertTriangle, Globe, Clock, Users, Target, Smartphone, Activity, ExternalLink } from "lucide-react";
import { checkURLSafety, SafeBrowsingMatch, SafeBrowsingResult } from "@/lib/safebrowsing";

// Cryptic stats component
const CryptText = ({ children, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(true);
  const chars = "0123456789ABCDEF";
  const finalText = children.toString();

  useEffect(() => {
    if (!finalText) return;
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split("")
          .map((letter, idx) => (idx < iteration ? letter : chars[Math.floor(Math.random() * chars.length)]))
          .join("")
      );
      if (iteration >= finalText.length) {
        clearInterval(interval);
        setIsDecrypting(false);
      }
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [finalText]);

  return <span className={`font-mono ${isDecrypting ? "text-green-400" : ""} ${className}`}>{displayText}</span>;
};

// Terminal loader
const TerminalLoader = () => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => setDots(prev => (prev.length >= 3 ? "" : prev + ".")), 500);
    return () => clearInterval(interval);
  }, []);
  return <span className="text-green-400">ANALYZING{dots}</span>;
};

type Threat = {
  url: string;
  safe: boolean;
  info?: SafeBrowsingMatch[];
  timestamp: string;
};

const ThreatDashboardVisual = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [scannedUrls, setScannedUrls] = useState<Threat[]>([]);
  const [sandboxUrl, setSandboxUrl] = useState(""); // URL for sandbox preview

  const testUrls = [
    "https://testsafebrowsing.appspot.com/s/malware.html",
    "https://testsafebrowsing.appspot.com/s/phishing.html",
    "https://testsafebrowsing.appspot.com/s/unwanted.html",
    "https://www.google.com",
    "https://example.com",
  ];

  const handleScan = async (scanUrl: string) => {
    try {
      const res: SafeBrowsingResult = await checkURLSafety(scanUrl);
      const newThreat: Threat = {
        url: scanUrl,
        safe: res.safe,
        info: res.info,
        timestamp: new Date().toLocaleTimeString(),
      };
      setScannedUrls(prev => [newThreat, ...prev.slice(0, 9)]);
    } catch (err) {
      console.error("Scan failed:", err);
      const newThreat: Threat = {
        url: scanUrl,
        safe: true,
        info: [],
        timestamp: new Date().toLocaleTimeString(),
      };
      setScannedUrls(prev => [newThreat, ...prev.slice(0, 9)]);
    }
  };

  const analyzeUrl = async () => {
    if (!url) return;
    setLoading(true);
    await handleScan(url);
    setLoading(false);
    setUrl("");
  };

  const getRiskBadge = (safe: boolean, info?: SafeBrowsingMatch[]) => {
    if (safe) return <Badge className="bg-green-700 text-green-100 border-green-600">SECURE</Badge>;
    if (!info || info.length === 0) return <Badge className="bg-gray-700 text-gray-200 border-gray-600">UNKNOWN</Badge>;
    const severity = info[0].threatType.toLowerCase();
    switch (severity) {
      case "malware":
        return <Badge className="bg-red-700 text-red-100 border-red-600">CRITICAL</Badge>;
      case "social_engineering":
        return <Badge className="bg-orange-700 text-orange-100 border-orange-600">HIGH</Badge>;
      case "unwanted_software":
        return <Badge className="bg-yellow-700 text-yellow-100 border-yellow-600">MEDIUM</Badge>;
      case "potentially_harmful_application":
        return <Badge className="bg-purple-700 text-purple-100 border-purple-600">LOW</Badge>;
      default:
        return <Badge className="bg-gray-700 text-gray-200 border-gray-600">UNKNOWN</Badge>;
    }
  };

  const getPlatformIcon = (platformType?: string) => {
    switch (platformType) {
      case "MOBILE":
        return <Smartphone className="h-4 w-4 text-cyan-400" />;
      case "DESKTOP":
        return <Globe className="h-4 w-4 text-cyan-400" />;
      default:
        return <Globe className="h-4 w-4 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-950 min-h-screen">
      <div className="container mx-auto max-w-7xl">

        {/* URL Analyzer */}
        <div className="mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-white font-mono">
            <span className="text-green-400">&gt;</span> REAL-TIME URL SCANNER
          </h2>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-gray-400 text-sm font-mono">QUICK_TEST:</span>
              {testUrls.map((testUrl, idx) => (
                <button
                  key={idx}
                  className="bg-gray-800 hover:bg-gray-700 text-green-400 px-3 py-1 rounded font-mono text-xs transition border border-gray-600 hover:border-green-500"
                  onClick={() => handleScan(testUrl)}
                >
                  TEST_{idx + 1}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="ENTER_TARGET_URL..."
                className="bg-black border border-gray-600 text-green-400 p-3 rounded flex-1 font-mono text-sm focus:border-green-500 focus:outline-none"
              />
              <button
                onClick={analyzeUrl}
                disabled={loading || !url}
                className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded font-mono text-sm transition border border-red-600 disabled:bg-gray-700 disabled:border-gray-600"
              >
                {loading ? <TerminalLoader /> : "EXECUTE"}
              </button>
            </div>
          </div>
        </div>

        {/* Recent Threats */}
        <Card className="bg-gray-900 border border-gray-700">
          <CardHeader className="bg-gray-800 border-b border-gray-700">
            <CardTitle className="flex items-center gap-3 text-white">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
              <span className="font-mono">LIVE_THREAT_MONITOR</span>
              <Badge className="bg-red-700 text-red-100 border-red-600 font-mono">
                {scannedUrls.filter(t => !t.safe).length} ACTIVE
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              {scannedUrls.map((threat, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-800 p-4 hover:bg-gray-800 transition ${
                    !threat.safe ? 'border-l-4 border-l-red-500' : 'border-l-4 border-l-green-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getPlatformIcon(threat.info?.[0]?.platformType)}
                        <code className="text-sm text-cyan-400 break-all">{threat.url}</code>
                        {getRiskBadge(threat.safe, threat.info)}
                        {!threat.safe && (
                          <button
                            className="ml-auto flex items-center gap-1 text-xs font-mono px-2 py-1 bg-gray-800 text-green-400 border border-gray-600 rounded hover:border-green-500 transition"
                            onClick={() => setSandboxUrl(threat.url)}
                          >
                            <ExternalLink className="h-3 w-3" /> SANDBOX
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {scannedUrls.length === 0 && (
                <div className="p-8 text-center">
                  <Clock className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 font-mono">WAITING_FOR_THREATS...</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Sandbox Preview */}
        {sandboxUrl && (
          <Card className="bg-gray-900 border border-gray-700 mt-8">
            <CardHeader className="bg-gray-800 border-b border-gray-700">
              <CardTitle className="flex items-center gap-3 text-white">
                <span className="font-mono">SANDBOX_PREVIEW</span>
                <button
                  className="ml-auto text-xs font-mono px-2 py-1 bg-gray-800 text-red-400 border border-gray-600 rounded hover:border-red-500 transition"
                  onClick={() => setSandboxUrl("")}
                >
                  CLOSE
                </button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <iframe
                src={sandboxUrl}
                sandbox="allow-scripts allow-forms allow-popups"
                style={{ width: "100%", height: "600px", border: "1px solid #333" }}
                title="Sandbox Preview"
              />
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ThreatDashboardVisual;
