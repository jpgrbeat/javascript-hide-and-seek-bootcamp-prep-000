function getFirstSelector(selector) {

  return document.querySelector(selector)

}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let lis = document.getElementById('app').querySelectorAll('.ranked-list')
  for (var i = 0; i < lis.length; i++) {
    let el = lis[i]

    el.innerHTML = (parseInt(el.innerHTML) + n )
  }

  return lis;
}

function deepestChild() {

  return document.getElementById("boo")

}
