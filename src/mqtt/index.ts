import mqtt from 'mqtt'
import { MQTT } from '../config'

export const mqttClient = mqtt.connect(MQTT.URL)

mqttClient.on('connect', () => {
    console.log(`MQTT Connected to ${MQTT.URL}`)

    mqttClient.subscribe(MQTT.TOPIC, (error, granted) => {
        if (error) {
            console.log('Error happened subscribing')
            console.error(error)
            return
        }

        console.log(`MQTT Subscribed to topics '${granted.map((s) => s.topic).join(', ')}'`)
    })
})
