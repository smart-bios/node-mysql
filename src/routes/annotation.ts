import { Router } from 'express'
import { addAnnotation, searchByAnnotation, searchByDescription, searchById } from '../controlles/annotation';


const router = Router();

router.post('/add', addAnnotation);
router.get('/search/:id', searchById);
router.get('/search/code/:code', searchByAnnotation)
router.get('/search/desc/:text', searchByDescription)


export default router;