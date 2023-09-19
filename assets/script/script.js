const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const scale = document.querySelector('.scale')
const btn1 = document.querySelector('.btn1')

btn1.onclick = function getOption () {
  const num1 = parseInt(input1.value)
  const num2 = parseInt(input2.value)
  const toBalance = [num1, num2]
  const interval = input3.value
  const arr = interval.split(',')
  const numList = []
  let count = false
  let x, y, a, b
  for (let i = 0; i < arr.length; i++) {
    numList.push(parseInt(arr[i]))
  }
  if (input1.value.length === 0 || input2.value.length === 0) {
    scale.textContent = 'Input values please!!!'
  } else {
    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < numList.length; i++) {
        if (numList[i]) {
        }
      }
    }

    for (let i = 0; i < numList.length; i++) {
      for (let j = 0; j < numList.length; j++) {
        x = toBalance[0] + numList[i]
        y = toBalance[1] + numList[j]
        if (x === y) {
          count = true
          a = numList[i]
          b = numList[j]
          break
        }
        if (count) {
          break
        }
      }
      if (count) {
        const resultArray = [a, b]
        scale.style.color = '#556b2f'
        scale.style.fontSize = '20px'
        scale.textContent = `${resultArray} is required to balance ${toBalance}`
      } else {
        scale.textContent = 'Scale Imbalanced'
      }
    }
  }
}
