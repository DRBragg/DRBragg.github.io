const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let userCode = []


const keyCheck = key => konamiCode.includes(key) ? userCode.push(key) : false

const sequenceCheck = function () {
  let i = 0
  while (i < userCode.length) {
    let isClean = codeCheck(i)
    if (isClean) {
      if (i === userCode.length - 1) {
        return true
      } else {
        i++
      }
    } else {
      return false
    }
  }
}

const codeCheck = index => userCode[index] === konamiCode[index]

const reset = () => userCode = []

const userInput = function (e) {
  let keyPressed = e.keyCode
  let check = keyCheck(keyPressed)
  if (check && check === konamiCode.length) {
    success()
  } else {
    let progress = sequenceCheck()
    if (!progress) {
      reset()
    }
  }
}

const success =  function () {
  document.getElementById('style').setAttribute('href', 'css/themes/flyers.css');
  document.querySelector('#hobby').innerText = 'Flyers Fan'
}

document.addEventListener("keyup", userInput)
