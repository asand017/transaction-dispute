const express = require('express')
const cors = require('cors')
const app = express()
const winston = require('winston')
const path = require('path')
const port = 8080

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'dispute-service' },
    transports: [
        new winston.transports.File({ filename: './backend-node/logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: './backend-node/logs/transactions.log', level: 'info'}),
        new winston.transports.File({ filename: './backend-node/logs/combined.log' }),
    ],
})

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080']
}))

app.use(express.json())

app.use('/', express.static(path.resolve(__dirname, "../transaction-dispute-app/build")))

app.post('/login', function(req,res) {
    console.log(req.body)
    const { username, password } = req.body

    if(!username || !password) {
        return res.status(403).json({error: 'Username and password are required'})
    }

    return res.status(200)
            .set('Content-Type', 'application/json')
            .json({
                id: 'f12e41e6-c51a-5dc7-a78-9fawi9870fda',
                username,
                firstName: 'Bilbo',
                lastName: 'Baggins'
            })
})

// Hanldes a GET /transactions request
app.get('/transactions', function (req, res )  {
    // Check if the user is authenticated in this session

    return res.status(200).json({
            data: [
                {id: 1, posted_date: new Date(2022, 7, 13), description: 'Chipotle 2333 Santa Ana CA 07/10', charge: 13.45},
                {id: 2, posted_date: new Date(2022, 7, 13), description: 'Riot Games 07/09', charge: 9.99},
                {id: 3, posted_date: new Date(2022, 7, 9), description: 'NETFLIX id:1281973 07/09', charge: 9.99}
            ]
        })
    
})

app.post('/disputes', function(req,res) {
    logger.info(req.body.dispute)
    if(!req.body.dispute){
        logger.error("invalid dispute input")
        return res.status(400).send({message: 'A dispute is required for successful submission'})
    }

    if(!req.body.id){
        logger.error("could not find transaction id")
        return res.status(400).send({message: 'Unable to find transaction id for dispute'})
    }

    res.status(202).send({data: 'POST new dispute'})
})

app.listen(port, () => {
    console.log(`${new Date(Date.now()).toISOString()} | Server listening on port ${port}`)
})