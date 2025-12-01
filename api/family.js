export default async function handler(req, res) {
  // Allow frontend domains to call API
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // For Preflight Check
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { aadhaar } = req.query;
  if (!aadhaar) {
    return res.status(400).json({ error: "Aadhaar required" });
  }

  try {
    const API = `https://devxadi.vercel.app/fetch?key=devxadi2104&aadhaar=${aadhaar}`;
    const response = await fetch(API);
    const data = await response.json();

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      error: "Family API Failed",
      details: err.message
    });
  }
}
