export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { number } = req.query;
  if (!number) return res.status(400).json({ error: "Phone number required" });

  try {
    const API = `https://random-remove-batch-tea.trycloudflare.com/search?mobile=${number}`;
    const response = await fetch(API);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "fetch_error", details: err.toString() });
  }
}
