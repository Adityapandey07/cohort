import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_UxYJXRG8A7ME@ep-yellow-cloud-a1o5t3dz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});

async function createUsersTable() {
    console.log("Connecting to the database..."); // Debugging

    try {
        await client.connect();
        console.log("Connected successfully!"); // Debugging

        await client.query(`
            CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("Table 'users' created successfully.");
    } catch (error) {
        console.error("Error creating table:", error);
    } finally {
        await client.end();
        console.log("Database connection closed.");
    }
}

createUsersTable();
