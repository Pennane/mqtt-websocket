import app from './app'
import * as http from 'http'
import { HTTP } from '../config'

const server = http.createServer(app)

server.listen(HTTP.PORT, () => {
    console.info(`Server running on port ${HTTP.PORT}`)
})
