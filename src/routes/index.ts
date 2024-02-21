import express from 'express';

const router: express.Router = express.Router();

router.get('/api/version', (req: express.Request, res: express.Response) => {
  console.log('/api/version');
  res.json({
    version: '0.0.1',
  });
});

export default router;
