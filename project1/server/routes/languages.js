import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import languageData from '../data/languages.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()
router.get('/', (req, res) => {
  res.status(200).json(languageData)
})

router.get('/:languageId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/language.html'))
})

export default router