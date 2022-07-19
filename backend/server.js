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
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'transactions.log', level: 'info'}),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
})

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())

app.use('/', express.static(path.resolve(__dirname, "../transaction-dispute-app/build")))

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