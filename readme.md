# Raspberry Pi + Sainsmart 16 Relay + NodeJS

Prototype to control the Sainsmart 16 Relay module with NodeJS running on a RaspberryPi.


## Running the project

### Hardware

- Connect the Sainsmart 16 Relay module to the Raspberry Pi GPIO pins like expected in [this video](https://www.youtube.com/watch?v=TFt480sxNWg)

| Sainsmart Pin | Pi\* Pin | Pi GPIO Pin | Notes |
|---|---|---|---|
| 1 | 3 | 2 |   |
| 2 | 5 | 4 |   |
| 3 | 7 | 4 |   |
| 4 | 11 | 17 |   |
| 5 | 13 | 27 |   |
| 6 | 15 | 22 |   |
| 7 | 19 | 10 |   |
| 8 | 21 | 9 |   |
| 9 | 23 | 11 |   |
| 10 | 29 | 5 |   |
| 11 | 31 | 6 |   |
| 12 | 33 | 13 |   |
| 13 | 35 | 19 |   |
| 14 | 37 | 26 |   |
| 15 | 40 | 21 |   |
| 16 | 38 | 20 |   |
| GND | 34 |   | ground pin |
| GND | 30 |   | ground pin |
| 5v | 1 |   | 3.3v pin |

\* Raspbery Pi model B v1.2 used in this prototype.


### Software

- Ensure the necessary modules are installed on the Pi
  - [NodeJS](https://nodejs.org/)
  - [npm](https://www.npmjs.com/)
  - [nvm](https://github.com/nvm-sh/nvm): Once installed, ensure to run `nvm install 18`

- [Clone the project](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to a Raspberry Pi  

- With a Terminal window, go to the location where you cloned the project

- Install the Node dependencies with `npm install`

- Run the project with `npm start`


## References

[Raspberry Pi: 16 Channel Relay how to with example software for automation projects | skiwithpete - YouTube](https://www.youtube.com/watch?v=TFt480sxNWg)

[Driving a SainSmart relay with Raspberry Pi | Craig McNamara - CoderWall](https://coderwall.com/p/izzsig/driving-a-sainsmart-relay-with-raspberry-pi)