# Monitor devices with InfluxDB and MQTT - Workshop Luby
Simple websocket server with InfluxDB and MQTT to monitor devices

## Prerequisites

<ul>
  <li>Linux, MacOS or WSL</li>
  <li>Docker and docker-compose</li>
  <li>Nodejs</li>  
</ul>

## Steps to run

1. Clone the repository

`git clone https://github.com/josethz00/influx_mqtt`

2. Change firewall.sh permissions to turn in on an executable

`chmod +rx firewall.sh`

3. Run the firewall.sh script

`sudo ./firewall.sh`

4. Run docker-compose

`cd docker; docker-compose up --build`

5. Run client server

`cd ../server; node main.js`

6. Run MQTT device script

`cd ../device; node mqtt-device.js`