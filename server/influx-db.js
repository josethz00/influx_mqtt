const { InfluxDB } = require('influx');

const influx = new InfluxDB({
  host: 'localhost',
  port: 8086,
  username: 'workshop',
  password: 'workshop',
  database: 'workshop',
}); 

module.exports = { influx };
  