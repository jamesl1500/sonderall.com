/**
 * Database Connection
 * This module handles the database connection and queries.
 * Makes use of MySQL2 for database operations.
 * 
 * @module libs/db
 */
import mysql, { PoolOptions } from 'mysql2/promise';

/**
 * Pool Options for MySQL connection
 */
const access: PoolOptions = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mydatabase',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
};

/**
 * Create a MySQL connection pool
 * 
 * @returns {Pool} - A MySQL connection pool
 */
export const pool = mysql.createPool(access);

/**
 * Execute a query on the database
 * 
 * @param query - The SQL query string
 * @param params - Optional parameters for the SQL query
 * @returns The result of the query
 */
export async function query(query: string, params?: any[]) {
    const [results] = await pool.execute(query, params);
    return results;
}