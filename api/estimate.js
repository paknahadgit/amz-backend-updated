
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { asin, marketplace, start_date, end_date } = req.body;

  if (!asin || !marketplace || !start_date || !end_date) {
    return res.status(400).json({
      error: 'Missing required parameters: asin, marketplace, start_date, or end_date'
    });
  }

  const mockData = {
    data: [{
      attributes: {
        data: [
          { estimated_units_sold: 12, last_known_price: 25.0 },
          { estimated_units_sold: 18, last_known_price: 25.0 }
        ]
      }
    }]
  };

  res.status(200).json(mockData);
}
