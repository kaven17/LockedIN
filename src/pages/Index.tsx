// Update this page (the content is just a fallback if you fail to update the page)

import Hero from "@/components/Hero";
import URLAnalyzer from "@/components/URLAnalyzer";
import FeatureShowcase from "@/components/FeatureShowcase";
import ExtensionPreview from "@/components/ExtensionPreview";
import APIPreview from "@/components/APIPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <URLAnalyzer />
      <FeatureShowcase />
      <ExtensionPreview />
      <APIPreview />
    </div>
  );
};

export default Index;
