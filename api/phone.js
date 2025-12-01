export default async function handler(req, res) {
  const number = req.query.number;
  if (!number) return res.status(400).json({ error: "Phone number required" });

  try {
    const fetchRes = await fetch(
      "https://random-remove-batch-tea.trycloudflare.com/search?mobile=" + number
    );
    const data = await fetchRes.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "Phone API error", details: e.toString() });
  }
}
