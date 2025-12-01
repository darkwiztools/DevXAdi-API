export default async function handler(req, res) {
  // CORS ALLOWED FOR ALL DOMAINS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Aadhaar required" });

  try {
    const apiUrl = `https://random-remove-batch-tea.trycloudflare.com/search?aadhar=${id}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      error: "Aadhaar API Failed", 
      details: err.message
    });
  }
}
