import { Shield, Zap, Eye, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="p-4 border border-gray-700 rounded-lg bg-gray-900">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          Lockedin
          <br />
          <span className="text-blue-400 font-thin top-2">Ai Phishing Blocker</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Real-time AI protection that detects and blocks phishing websites in under{" "}
          <span className="text-blue-400 font-semibold">150ms</span>. 
          Secure your users with enterprise-grade threat intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 text-lg px-8 py-4"
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Protection
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-500 text-lg px-8 py-4"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-lg bg-gray-900 border border-gray-700">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Sub-150ms Detection</h3>
            <p className="text-gray-400">Lightning-fast threat analysis with edge computing</p>
          </div>

          <div className="p-6 rounded-lg bg-gray-900 border border-gray-700">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">95%+ Accuracy</h3>
            <p className="text-gray-400">AI models trained on millions of threat samples</p>
          </div>

          <div className="p-6 rounded-lg bg-gray-900 border border-gray-700">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Zero-Day Protection</h3>
            <p className="text-gray-400">Block never-before-seen threats in real-time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;