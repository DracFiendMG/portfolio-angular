const express = require("express")
const { MongoClient, ServerApiVersion } = require("mongodb")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const uri = 'mongodb+srv://DracFiend:Reddy_2000@portfolio-database.wrx5j6k.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio-Database'
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

const dbName = 'portfolio'
const collectionName = 'projects'

let db, collection

async function connectDB() {
    try {
        await client.connect()
        db = client.db(dbName)
        collection = db.collection(collectionName)
        console.log(`Connected to MongoDB database: ${dbName}`)
    } catch (err) {
        console.error('MongoDB connection error:', err.message)
    }
}

connectDB()

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await collection.find({}).toArray()
        console.log('This is my projects list: ', projects)
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})