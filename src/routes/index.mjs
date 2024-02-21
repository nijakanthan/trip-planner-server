import express from 'express';

const router = express.Router();

router.get('/api/version', (req, res) => {
  console.log('/api/version');
  res.json({
    version: '0.0.1',
  });
});

export default router;
