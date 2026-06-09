import express from 'express'
import languagesRouter from './routes/languages.js'

const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> Language Library API</h1>')
})

const PORT = process.env.PORT || 3001
app.use('/languages', languagesRouter)
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})


