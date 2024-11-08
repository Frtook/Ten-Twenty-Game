function getValue() {
  let number = document.querySelector("#number").value;
  let maxNumber = document.querySelector("#maxNumber").value;
  const resultDiv = document.querySelector(".result");
  let resultArray = [];

  for (let i = 1; i < maxNumber; i++) {
    let validNum = true;
    i = i.toString();

    if (i.length == 1) {
      if (number.includes(i)) {
        validNum = false;
      }
    } else {
      for (let j = 0; j < i.length; j++) {
        if (number.includes(i[j])) {
          validNum = false;
          break;
        }
      }
    }

    if (validNum) {
      resultArray.push(i);
    }
  }
  resultDiv.innerHTML = "";
  resultArray.forEach((num) => {
    const numDiv = document.createElement("div");
    numDiv.textContent = num;
    resultDiv.appendChild(numDiv);
  });
}
