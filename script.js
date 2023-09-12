let score = 0;

function increase(name, score) {
  let scoreHTML = document.getElementById(name);
  score = parseInt(score) + 1;
  scoreHTML.innerHTML = score;
}
