const array = [40, 100, 1, 6, 35, ]
function sumArray(mang) {
  let sum = 0
  for (let i = 0; i < mang.length - 1; i++) {
    sum += mang[i]
    console.log(mang[i])
  }
  return sum
}

const arrayMin = array.slice().sort(function (a, b) {
  return a - b;
})
const arrayMax = array.slice().sort(function (a, b) {
  return b - a;
})

document.getElementById('array').innerHTML = array
document.getElementById('sumMin').innerHTML = (sumArray(arrayMin) + ' ' + sumArray(arrayMax))
// document.getElementById('sumMax').innerHTML = sumArray(arrayMax)
