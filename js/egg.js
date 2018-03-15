// Just a little fun for my landing page
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let userCode = [];

const keyCheck = (key, index) => konamiCode[index] === key ? userCode.push(key) : reset();

const reset = () => userCode = [];

const userInput = function (e) {
  let check = keyCheck(e.keyCode, userCode.length);
  check > 0 ? check === konamiCode.length ? success() : console.log('keep going') : console.log('womp womp');
};

const success = function () {
  document.getElementById('style').setAttribute('href', 'css/themes/flyers.css');
  document.querySelector('#hobby').innerText = 'Flyers Fan';
  reset();
};

document.addEventListener('keyup', userInput);
