export default async function handler(req, res) {
  // Allow any domain request
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { cnic } = req.query;
  if (!cnic) {
    return res.status(400).json({ error: "CNIC required" });
  }

  try {
    const API = `https://osintapi.kaalveer.workers.dev/?key=leaked&cnic=${cnic}`;
    const response = await fetch(API);
    const data = await response.json();

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      error: "CNIC API Failed",
      details: err.message
    });
  }
}
