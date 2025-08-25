// safebrowsing.ts
export async function checkURLSafety(url: string) {
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
      const body = {
        client: { clientId: "guardio-safe", clientVersion: "1.0" },
        threatInfo: {
          threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
          platformTypes: ["ANY_PLATFORM"],
          threatEntryTypes: ["URL"],
          threatEntries: [{ url }],
        },
      };
  
      const res = await fetch(
        `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
  
      // DEV OVERRIDE: treat certain domains as phishing for testing
      const testUrls = ["https://paypal-verification.suspicious.com"];
      if (testUrls.includes(url)) {
        return { safe: false, info: [{ threatType: "SOCIAL_ENGINEERING", platformType: "ANY_PLATFORM" }] };
      }
  
      return { safe: !data.matches, info: data.matches || [] };
    } catch (err) {
      console.error("Safe Browsing API error:", err);
      return { safe: true, info: [] }; // default safe if API fails
    }
  }
  