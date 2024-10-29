const relays = require('./services/sainsmart-16');


// auto initialization
init();


// methods definitions
function init() {
  console.info('--- main init ---');

  relays.init();
  relays.enablePinsSequentially();
}
