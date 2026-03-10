import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('home');
});

router.get('/about', (req: Request, res: Response) => {
  res.render('about');
});

router.get('/contact', (req: Request, res: Response) => {
  res.render('contact');
});

export default router;
