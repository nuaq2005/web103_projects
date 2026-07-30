import { pool } from '../config/database.js'

const getLangs = async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM languages ORDER BY id ASC'
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows)
    } catch (error) {
        console.error('Full error:', error) // ← and this
        res.status(409).json({ error: error.message })
    }
}

const getLangById = async (req, res) => {
    try {
        const selectQuery = `
        SELECT name, creator, yearcreated, image, description
        FROM languages
        WHERE id=$1
        `
        const languageId = req.params.languageId
        const results = await pool.query(selectQuery, [languageId])
        res.status(200).json(results.rows[0])
    }catch (error) {
        res.status(409).json( { error: error.message} )
    }
}

export default {
    getLangs,
    getLangById
}