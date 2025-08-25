// Checks if the page HTML contains keywords indicative of payment/transaction pages
export const isTransactionPage = (htmlContent: string) => {
    const keywords = [
      "credit card",
      "cvv",
      "expiry date",
      "paypal",
      "stripe",
      "bank transfer",
      "upi",
      "netbanking",
      "debit card",
      "account number",
    ];
    const lowered = htmlContent.toLowerCase();
    return keywords.some((kw) => lowered.includes(kw));
  };
  