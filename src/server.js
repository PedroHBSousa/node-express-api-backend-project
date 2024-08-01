// const express = module('express')
import express from 'express'

const app = express()
const port = 3000

const user = {
    nome: "pedro", 
    email:"pedro@gmail.com"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/user', (req, res) => {
    res.json(user)
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
