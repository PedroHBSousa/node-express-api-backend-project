// const express = module('express')
import express from 'express'
import userRouter from './routers/useRouter.js'
import productRouter from './routers/productRouter.js'
import { PORT, HOST, ENVIRONMENT} from './config.js'


const app = express()
const port = PORT


app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${ENVIRONMENT} ${ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)
})
