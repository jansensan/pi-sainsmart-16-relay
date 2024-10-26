# Raspberry Pi + Sainsmart 16 Relay + NodeJS

Prototype to control the Sainsmart 16 Relay module with NodeJS running on a RaspberryPi.


## Running the project

### Hardware

- Connect the Sainsmart 16 Relay module to the Raspberry Pi GPIO pins like expected in [this video](https://www.youtube.com/watch?v=TFt480sxNWg)


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