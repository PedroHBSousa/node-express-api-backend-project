// const express = module('express')
import express from 'express'
import userRouter from './routers/useRouter.js'
import productRouter from './routers/productRouter.js'

const app = express()
const port = 3000

const user = {
    nome: "pedro", 
    email:"pedro@gmail.com"
}

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
