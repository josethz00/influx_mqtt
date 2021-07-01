global.WebSocket = require('ws');

const mqtt = require('mqtt'); 

new WebSocket.Server({
  port: 9000,
});

const BROKER_URL = 'mqtt://localhost:1883';

const client = mqtt.connect(BROKER_URL, { resubscribe: true });

client.on('connect', () => {
  console.log(`Connected to ${BROKER_URL}`);
  setInterval(() => {
    const topics = ['TOPIC_1_TEST', 'TOPIC_2_TEST'];
    topics.map((topic) => 
      client.publish(topic, String(Math.random()), () => console.log(`sent to: ${topic}`))
    );
  }, 5000);
});