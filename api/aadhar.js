export default async function handler(req, res) {
  const id = req.query.id;
  if (!id) return res.status(400).json({ error: "Aadhaar required" });

  try {
    const fetchRes = await fetch(
      "https://random-remove-batch-tea.trycloudflare.com/search?aadhar=" + id
    );
    const data = await fetchRes.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "Aadhaar API error", details: e.toString() });
  }
}
