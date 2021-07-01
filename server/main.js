global.WebSocket = require('ws');
const mqtt = require('mqtt'); 
const { influx } = require('./influx-db');

new WebSocket.Server({
  port: 8000,
});

const BROKER_URL = 'mqtt://localhost:1883';

const mqttClient = mqtt.connect(BROKER_URL, { resubscribe: true });

mqttClient.on('connect', function () {
  const topics = ['TOPIC_1_TEST', 'TOPIC_2_TEST'];
  mqttClient.subscribe(topics);
})

mqttClient.on('message', function (topic, message) {
  console.log(message.toString())
})