const express = require('express')
const cors = require('cors')
const app = express()
const winston = require('winston')
const port = 8080

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'dispute-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
})

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.post('/disputes', function(req,res) {
    console.log("post dispute triggered")
    res.status(202).send('POST new dispute')
})

app.listen(port, () => {
    logger.info(`${new Date(Date.now()).toISOString()} | Server listening on port ${port}`)
})