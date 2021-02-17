import { Router } from 'express'
import {  addUser, deleteUser, editUser, getUser, listUsers } from '../controlles/users';

const router = Router();

router.get('/', listUsers);
router.get('/:id', getUser);
router.post('/add', addUser);
router.put('/edit/:id', editUser);
router.delete('/delete/:id', deleteUser);


export default router;