
function getData(name) {
  return fetch(name + '.txt')
    .then(response => response.text()).then(text => text.split("\n"))
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function genSeven(breakfast, lunch, dinner, n) {
  let str = breakfast[getRandomInt(breakfast.length)] + "<br>" + lunch[getRandomInt(lunch.length)] + "<br>" + dinner[getRandomInt(dinner.length)];
  if (n === 1) { return str } else { return (str + "<br><br>" + genSeven(breakfast, lunch, dinner, n - 1)) }
}

document.getElementById("one-button").onclick = function () {
  Promise.all([getData("breakfast"), getData("lunch"), getData("dinner")])
    .then(data => {
      const [breakfast, lunch, dinner] = data;
      document.getElementById('one').innerHTML =
        breakfast[getRandomInt(breakfast.length)] + "<br>" + lunch[getRandomInt(lunch.length)] + "<br>" + dinner[getRandomInt(dinner.length)]
    })
};

document.getElementById("seven-button").onclick = function () {
  Promise.all([getData("breakfast"), getData("lunch"), getData("dinner")])
    .then(data => {
      const [breakfast, lunch, dinner] = data; document.getElementById('seven').innerHTML = genSeven(breakfast, lunch, dinner, 7)
    })
};

document.getElementById("snack-button").onclick = function () {
  Promise.resolve(getData("snacks"))
    .then(data => {
      document.getElementById('snack').innerHTML = data[getRandomInt(data.length)]
    })
};

document.getElementById("breakfast-button").onclick = function () {
  Promise.resolve(getData("breakfast"))
    .then(data => {
      document.getElementById('breakfast').innerHTML = data[getRandomInt(data.length)]
    })
};

document.getElementById("lunch-button").onclick = function () {
  Promise.resolve(getData("lunch"))
    .then(data => {
      document.getElementById('lunch').innerHTML = data[getRandomInt(data.length)]
    })
};

document.getElementById("dinner-button").onclick = function () {
  Promise.resolve(getData("dinner"))
    .then(data => {
      document.getElementById('dinner').innerHTML = data[getRandomInt(data.length)]
    })
};