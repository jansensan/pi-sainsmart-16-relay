const rpio = require('rpio');

const piPins = require('../constants/pi-pins');


// consts
const PINS = piPins.getPins();

const DELAY_SIZE = 1000; // 1000 ms

const RelayState = {
  ON: rpio.LOW,
  OFF: rpio.HIGH,
}


// vars
let isInit = false;


module.exports = {
  init,
  activateAllPins,
  activatePinsSequentially,
  deactivateAllPins,
};


function init() {
  console.info('--- sainsmart init ---');

  if (isInit) {
    return;
  }

  // set initial pin states -- should all be off (no current passing)
  PINS.forEach(pin => {
    rpio.open(pin, rpio.OUTPUT, RelayState.OFF);
  });

  isInit = true;
}

function activateAllPins() {
  console.info('--- sainsmart activateAllPins ---');

  if (!isInit) init();

  PINS.forEach(pin => rpio.write(pin, RelayState.ON));
}

function deactivateAllPins() {
  console.info('--- sainsmart deactivateAllPins ---');

  if (!isInit) init();

  PINS.forEach(pin => rpio.write(pin, RelayState.OFF));
}

function activatePinsSequentially() {
  console.info('--- sainsmart activatePinsSequentially ---');

  if (!isInit) init();

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