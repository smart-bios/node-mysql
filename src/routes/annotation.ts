import { Router } from 'express'
import { addAnnotation, searchByAnnotation, searchById } from '../controlles/annotation';


const router = Router();

router.post('/add', addAnnotation);
router.get('/search/:id', searchById);
router.get('/search/code/:code', searchByAnnotation)

export default router;