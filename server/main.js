const WebSocket = require('ws');
const { connect } = require('mqtt');
const os = require('os'); 
const { influx } = require('./influx-db');

new WebSocket.Server({
  port: 8000,
});

const BROKER_URL = 'mqtt://localhost:1883';

const mqttClient = connect(BROKER_URL, { resubscribe: true });

mqttClient.on('connect', () => {
  const topics = ['TOPIC_1_TEST', 'TOPIC_2_TEST'];
  mqttClient.subscribe(topics);
});

mqttClient.on('message', async (topic, message) => {
  console.log(`TOPIC: ${topic}, MESSAGE: ${message.toString()}`);
  await influx.writePoints([
    {
      measurement: 'messages',
      tags: {
        host: os.hostname(),
      },
      fields: {
        topic,
        message,
      },
    }
  ]);
});