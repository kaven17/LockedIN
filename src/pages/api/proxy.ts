import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  if (!url || typeof url !== "string") return res.status(400).send("Missing url");

  try {
    const response = await fetch(url, { method: "GET" });
    const html = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("Failed to fetch page");
  }
}
