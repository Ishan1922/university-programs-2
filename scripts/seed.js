const { db } = require('@vercel/postgres');
const {programs} = require('../app/lib/placeholder-data');

async function seedPrograms(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS programs (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        domain TEXT NOT NULL,
        program_type TEXT NOT NULL,
        registration_open BOOLEAN NOT NULL,
        description TEXT ,
        placement_assurance BOOLEAN,
        image_url TEXT,
        university_name TEXT,
        faculty TEXT NOT NULL,
        hours INT,
        degree TEXT NOT NULL,
        criteria TEXT
      );
    `;

    console.log(`Created "programs" table`);

    // Insert data into the "users" table
    const insertedPrograms = await Promise.all(
      programs.map(async (prog) => {
        return client.sql`
        INSERT INTO programs (id,name,price,domain,program_type,registration_open,description,placement_assurance,image_url,university_name,faculty,hours,degree,criteria)
        VALUES (${prog.id},${prog.name},${prog.price},${prog.domain},${prog.program_type},${prog.registration_open},${prog.description},${prog.placement_assurance},${prog.image_url},${prog.university_name},${prog.faculty},${prog.hours},${prog.degree},${prog.criteria})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedPrograms.length} programs`);

    return {
      createTable,
      programs: insertedPrograms,
    };
  } catch (error) {
    console.error('Error seeding programs:', error);
    throw error;
  }
}

async function main() {
      const client = await db.connect();

      await seedPrograms(client);

      await client.end();
}

main().catch((err) => {
      console.error('An error occurred while seeding: ', err);
})