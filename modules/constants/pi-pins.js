// consts
const pinMap = [
  createPin(3, 2),
  createPin(5, 3),
  createPin(7, 4),
  createPin(11, 17),

  createPin(13, 27),
  createPin(15, 22),
  createPin(19, 10),
  createPin(21, 9),

  createPin(23, 11),
  createPin(29, 5),
  createPin(31, 6),
  createPin(33, 13),

  createPin(35, 19),
  createPin(37, 26),
  createPin(40, 21),
  createPin(38, 20),
];
const numPins = pinMap.length;


module.exports = {
  // consts
  pinMap,
  numPins,
  // methods
  getPins,
  getGPIOIds,
}


// methods
function getPins() {
  let pins = [];
  pinMap.forEach(map => pins.push(map.pin));
  return pins;
}

function getGPIOIds() {
  let ids = [];
  pinMap.forEach(map => pins.push(map.gpio));
  return ids;
}



// utils
function createPin(pin, gpio) {
  return { pin, gpio };
}