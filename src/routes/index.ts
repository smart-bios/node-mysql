import { Router } from 'express'
import userRouter from './user'
import specieRouter from './specie'
import annotRouter  from './annotation'


const route = Router()

route.use('/user', userRouter)
route.use('/specie', specieRouter)
route.use('/genes', annotRouter)

export default route
