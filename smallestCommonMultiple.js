function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let myArr = [];
    let multiple = 0;
    let counter = 1;
  
    for (let i = min; i < max; i++) {
      myArr.push(i);
    }
    console.log(myArr);
    multiple = max;
    while (true) {
      if (multiple % max === 0 && myArr.every(el => multiple % el === 0)) {
        break;
      }
      counter++;
      multiple = max * counter;
    }
  
    return multiple;
  }
  
  console.log(smallestCommons([23,18]));