const pool = require('./config/db');
const characters = require('./data');

async function seed() {
  for (const character of characters) {
    await pool.query(
      `INSERT INTO characters (id, name, "realName", team, ability, "firstAppearance", description, image, "threatLevel")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       ON CONFLICT (id) DO NOTHING`,
      [
        character.id,
        character.name,
        character.realName,
        character.team,
        character.ability,
        character.firstAppearance,
        character.description,
        character.image,
        character.threatLevel
      ]
    );
  }

  console.log('Seeding complete');
  pool.end();
}

seed();