// const express = module('express')
import express from 'express'
import userRouter from './routers/useRouter.js'
import productRouter from './routers/productRouter.js'
import { PORT, HOST, ENVIRONMENT} from './config.js'


const app = express()

app.use(logger)
// middleware que converte o request body json para objeto
app.use(express.json())

app.get('/', welcome)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('*', routeNotFounded)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ENVIRONMENT} ${ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)
})
