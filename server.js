const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.get('/api/exchange-rates', async (req, res) => {
  if (!process.env.API_KEY) {
    return res.status(500).json({ result: 'error', message: 'Server configuration error' });
  }

  const { from, to } = req.query;
  if (!from || !to || !['USD','EUR','GBP','JPY','CNY','INR','AUD','CAD','EGP'].includes(from.toUpperCase()) || !['USD','EUR','GBP','JPY','CNY','INR','AUD','CAD','EGP'].includes(to.toUpperCase())) {
    return res.status(400).json({ result: 'error', message: 'Invalid currency parameters' });
  }

  try {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`, {
      timeout: 5000
    });
    
    if (!response.data?.conversion_rates) {
      throw new Error('Invalid API response');
    }

    res.json({
      result: 'success',
      conversion_rates: response.data.conversion_rates
    });
  } catch (error) {
    console.error('API Error:', error.message);
    const statusCode = error.response?.status || 500;
    const message = statusCode === 429 ? 'Too many requests' : 'Exchange rate service unavailable';
    res.status(statusCode).json({ result: 'error', message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});