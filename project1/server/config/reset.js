import './dotenv.js';
import {pool} from './database.js';
import languageData from '../data/languages.js';

const createLangsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS languages;

    CREATE TABLE IF NOT EXISTS languages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        creator VARCHAR(50) NOT NULL,
        yearCreated VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
    )
    `;

    try {
        await pool.query(createTableQuery);
        console.log('🎉 languages table created successfully');
    } catch (err) {
        console.error('⚠️ error creating languages table', err);
    }
};

const seedLangsTable = async () => {
    await createLangsTable();

    languageData.forEach((language) => {
        const insertQuery = {
            text: `
                INSERT INTO languages
                (name, creator, yearCreated, image, description)
                VALUES ($1, $2, $3, $4, $5)
            `
        };

        const values = [
            language.name,
            language.creator,
            language.yearCreated,
            language.image,
            language.description
        ];

        pool.query(insertQuery, values, (err) => {
            if (err) {
                console.error('⚠️ error inserting language', err);
                return;
            }

            console.log(`✅ ${language.name} added successfully`);
        });
    });
};

seedLangsTable();