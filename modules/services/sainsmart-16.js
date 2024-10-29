const rpio = require('rpio');

const piPins = require('../constants/pi-pins');


// consts
const PINS = piPins.getPins();

const DELAY_SIZE = 1000; // 1000 ms

const RelayState = {
  ON: rpio.LOW,
  OFF: rpio.HIGH,
}


module.exports = {
  init,
  enablePinsSequentially,
};


function init() {
  console.info('--- sainsmart init ---');

  rpio.init({ close_on_exit: false });

  // set initial pin states -- should all be off (no current passing)
  PINS.forEach(pin => {
    rpio.open(pin, rpio.OUTPUT, RelayState.OFF);
  });

  process.on('exit', () => {
    disableAllPins();
    rpio.exit();
  });
}

function enableAllPins() {
  console.info('--- sainsmart enableAllPins ---');

  PINS.forEach(pin => rpio.write(pin, RelayState.ON));
}

function disableAllPins() {
  console.info('--- sainsmart disableAllPins ---');

  PINS.forEach(pin => rpio.write(pin, RelayState.OFF));
}

function enablePinsSequentially() {
  console.info('--- sainsmart enablePinsSequentially ---');

  let delay = DELAY_SIZE;
  PINS.forEach(pin => {
    setTimeout(
      () => {
        rpio.write(pin, RelayState.ON);
        console.log(`Relay at pin #${pin} should be activated`);
      },
      delay
    );
    delay += DELAY_SIZE;
  });
}