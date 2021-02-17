import { Router } from 'express'
import userRouter from './user'


const route = Router()

route.use('/user', userRouter)
export default route
