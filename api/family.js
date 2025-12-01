export default async function handler(req, res) {
  const aadhaar = req.query.aadhaar;
  if (!aadhaar) return res.status(400).json({ error: "Aadhaar required" });

  try {
    const fetchRes = await fetch(
      "https://devxadi.vercel.app/fetch?key=devxadi2104&aadhaar=" + aadhaar
    );
    const data = await fetchRes.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "Family API error", details: e.toString() });
  }
}
