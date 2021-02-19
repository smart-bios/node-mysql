import { Router } from 'express'
import { addSpecie, editSpecie, deleteSpecie, getSpecie, listSpecies } from '../controlles/species';

const router = Router();

router.get('/', listSpecies);
router.get('/:id', getSpecie);
router.post('/add', addSpecie);
router.put('/edit/:id', editSpecie);
router.delete('/delete/:id', deleteSpecie);


export default router;