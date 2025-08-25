import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-cyber px-4">
      <Card className="p-8 max-w-md w-full bg-card/80 backdrop-blur-sm border border-primary/20 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-6xl font-bold mb-2 text-primary">404</h1>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The page you're looking for has been moved or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={() => window.location.href = "/"} 
            className="w-full bg-gradient-primary hover:shadow-cyber transition-all duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Dashboard
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full border-primary/50 hover:border-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
