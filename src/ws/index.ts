import ws from 'ws'
import { mqttClient } from '../mqtt'
import { WEBSOCKET } from '../config'

const wss = new ws.Server({ port: WEBSOCKET.PORT })

const broadcast = (data: any) => {
    wss.clients.forEach((client) => {
        client.send(data)
    })
}

wss.once('listening', () => {
    console.log('Websocket server running on port ' + WEBSOCKET.PORT)
})

mqttClient.on('message', (topic, payload) => {
    broadcast([topic, payload].join(': '))
})
