const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const scale = document.querySelector(".scale");
const btn1 = document.querySelector(".btn1");

btn1.onclick = function getOption() {
  let num1 = input1.value;
  let num2 = input2.value;
  let toBalance = [num1, num2];
  let interval = input3.value;
  let arr = interval.split(",");
  let numList = [];
  let found = false;
  let x, y, a, b;
  for (let i = 0; i < arr.length; i++) {
    numList.push(parseInt(arr[i]));
  }
  if ((input1.value.length === 0) || (input1.value.length === 0)) {
    scale.style.color = "#b22222";
    scale.textContent = "Input values please!";
  } else {
    numList.sort();
    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < numList.length; i++) {
        if (numList[i]) {
        }
      }
    }

    for (let i = 0; i < numList.length; i++) {
      for (let j = 0; j < numList.length; j++) {
        x = toBalance[0] + numList[i];
        y = toBalance[1] + numList[j];
        if (x === y) {
          found = true;
          a = numList[i];
          b = numList[j];
          break;
        }
        if (found) {
          break;
        }
      }
      if (found) {
        let resultArray = [a, b];
        console.log(resultArray);
        resultArray.sort();
        scale.textContent = `${resultArray} is required to balance ${toBalance}`;
      } else {
        scale.style.color = "#b22222";
        scale.textContent = `Scale Imbalanced`;
      }
    }
  }
};
