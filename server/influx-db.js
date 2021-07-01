const Influx = require('influx');

const influx = new Influx.InfluxDB({
  database: 'workshop_db',
  host: 'localhost',
  port: 8086,
  username: 'admin',
  password: 'admin',
});

module.exports = { influx };
