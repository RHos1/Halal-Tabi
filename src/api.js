import express from 'express';
import cors from 'cors';
import {getEvents, createUser,findUser,addBlog,getBlogs,addComment,getComments,getQuery,searchEvents} from './mysql.js';
import bodyParser from 'body-parser';
import session from 'express-session';



const app = express();
const store = new session.MemoryStore();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(session({
    secret: 'some secret',
    resave: false,
    cookie: {maxAge: 30000},
    saveUninitialized: false,
    store
}));

app.get("/Events", async (req,res) => {
    try{
        const Events = await getEvents();
        res.send(Array.isArray(Events) ? Events : []);
    } catch (error) {
        console.log("Error fetching events from DB.", error);
        res.status(500).send({message : 'failed to acquire data'});
    }

});

app.post('/register-submit', async (req,res) => {
    const {username,password} = req.body;

    if (!username || !password) {
        return res.status(400).send('Missing username or password');
    }
    try {
        await createUser(username, password);
        console.log(`Registered user: ${username}`);
        res.status(200).send('Registration Successful');
    }catch(err){
        console.log("Error inserting user", err);
        res.status(500).send('Error registering users');
    }

});
app.get('/getblogs', async (req,res) => {
    try{
        const blogs = await getBlogs();
        res.status(200).send(Array.isArray(blogs) ? blogs: []);
    }catch(err){
        res.status(500).send('There was an error retrieving blogs')
    }
    
});

app.get('/user', (req,res) =>{
    if (req.session.user){
        res.status(200).send(req.session.user);
    }
    else{
        res.sendStatus(204);
    }

})

app.post('/login-val', async (req,res) => {
    const{username,password} = req.body;
    try{
        const userExists = await findUser(username,password);
        if (req.session.authenticated){
            return res.status(200).json({msg: 'Already logged in', user: req.session.user});
        }
            if (userExists){
                console.log(`Welcome back user ${username}`);
                req.session.authenticated = true;
                req.session.user = {username};
                return res.status(200).json({msg: 'Login Successful', user: req.session.user});
    
            }else{
                console.log('User not found');
                return res.status(401).send(`Error Logging in`);
                 
               
               
            }
            
        
       
       
    }catch(err){
        console.log('Error finding this user');
        return res.status(500).send('Login Error - Check Username and Password');
        
    }
});

app.post('/login', (req,res) => {
    const {username,password} = req.body;
    if (username && password){
        if (req.session.authenticated){
            res.json(req.session);
        }else{
            if (password === '123'){
                req.session.authenticated = true;
                req.session.user = {
                    username,password
                };
                res.json(req.session);

            }else{
                res.status(403).json({msg: 'Bad Credentials'});
            }
        }

        } else  res.status(403).json({msg: 'Bad Credentials'});
      
    })

app.post('/postBlog', async (req,res) => {
    const{Title,image,Text}  =  req.body;
    try{
        await addBlog(Title,image,Text);
        res.status(200).send('Blog Added Successfully')
    }catch(err){
        res.status(500).send('Error accessing database')
    }
})

app.post('/addComment', async (req,res) => {
    const {blog_id,blog_text} = req.body;
    console.log("Received data: ", req.body);
    try{
        await addComment(blog_id,blog_text);
        res.status(200).send('Comment added');
    }catch(err){
        console.error("DB error ",err);
        res.status(500).send("There was an error with adding this comment")
    }

})

app.post('/getComments', async (req,res) => {
    const {blog_id} = req.body;
    try{
        const rows = await getComments(blog_id);
        res.json(Array.isArray(rows) ? rows : [rows]);

    }
    catch(err){
        console.error(err);
        res.status(500).send('Error with retrieving the database');
    }
})
app.post('/query', async (req,res) => {
    if(!req.body){
        return res.status(400).send('Bad Request');
    }
    const {query} = req.body;
    try{
        const results = await getQuery(query);
        res.json(Array.isArray(results)? results: [results]);

    }catch(err){
        console.error("An error occured retrieving this data")
        res.status(500).send('Error with making that search request')
    }
})
app.post('/searchEvents', async (req,res) => {
    if (!req.body){
        res.status(400).send("Bad request");
    };
    const {query} = req.body;
    try{
        const data = await searchEvents(query);
        res.json(Array.isArray(data)? data: [data]);

    }
    catch(err){
        console.error("error with that query",err);
        res.status(500).send('Error retrieving query');

    }
})




app.listen(8080, ()=>{
    console.log("Server running on port 8080");
})

