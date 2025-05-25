import mysql from 'mysql2';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,


}).promise();

export async function getEvents(){
    const [rows]= await pool.query("SELECT * FROM events");
    console.log("Retrieved your data successfully");
    console.log(rows);
    return rows;


}
export async function searchEvents(query){
    try{
       const [row] = await pool.execute("SELECT * FROM events WHERE event_content LIKE ?",[`%${query}%`])
       return (Array.isArray(row)? row: [row]);

    }catch(err){
        throw err;
    }

}
export async function createUser(username, password){
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await pool.query(
            "INSERT INTO users (username,password) VALUES (?, ?)",
            [username, hashedPassword]
        );
        return result;
    }catch(err){
        throw err;

    }
}

export async function findUser(username,password){
    try{
        const [rows] = await pool.query("SELECT password FROM users WHERE username = ?", [username]);
       
        if (rows.length === 0){
            return false;
        }
        const storedHash = rows[0].password;
        const match = await bcrypt.compare(password,storedHash)
        return match;
    }
    catch(err){
        console.error("Database error in findUser:", err);
        throw err;
    }
    

}

export async function addBlog(Title,image,Text){
    try{
        const[rows] = await pool.query("INSERT INTO blogs (Title,image,Text) VALUES(?,?,?)",[Title,image,Text]);
        return rows;
    }catch(err){
        throw err;
    }

}

export async function getBlogs(){
    try{
       const[rows] = await pool.query("SELECT * FROM blogs ORDER BY timestamp");
       return rows;
    }catch(err){
        throw err;
    }
}


export async function addComment(blog_id,blog_text){
    try{
        const [rows] = await pool.query("INSERT INTO comments (blog_id,blog_text) VALUES(?,?)",[blog_id,blog_text]);
        return rows;
    }catch(err){
        throw err;
    }
   

}

export async function getComments(blog_id){
    try{
        const[rows] = await pool.query("SELECT * FROM comments WHERE blog_id = ?", [blog_id]);
        return rows;
    }catch(err){
        throw err;
    }

}

export async function getQuery(query){
    try{
        const [results] = await pool.query("SELECT * FROM blogs WHERE Text LIKE ? ", [`%${query}%`]);
        return results;
    }catch(err){
        throw err;

    }

}