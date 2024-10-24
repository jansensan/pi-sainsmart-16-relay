const sainsmart16 = require('./services/sainsmart-16');


// auto initialization
init();


// methods definitions
function init() {
  console.info('--- main init ---');

  sainsmart16.init();
  sainsmart16.enablePinsSequentially();
}
