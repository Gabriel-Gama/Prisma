import express from 'express'

const app = express();

app.get('/test', () => {
    console.log('Application of node-cron and postgres')
})

app.listen(3030, () => {
    console.log('Server is running in port 3030!')
})