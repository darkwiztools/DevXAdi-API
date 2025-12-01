export default async function handler(req, res) {
  const cnic = req.query.cnic;
  if (!cnic) return res.status(400).json({ error: "CNIC required" });

  try {
    const res2 = await fetch(
      "https://osintapi.kaalveer.workers.dev/?key=leaked&cnic=" + cnic
    );
    const data = await res2.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "CNIC API error", details: e.toString() });
  }
}
