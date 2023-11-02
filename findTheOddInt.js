let findTheOddInt = (arrInt) => {
  // collect int and amount as key and value of object
  let objInt = {}

  // loop thru all Int to collect int and amount
  for(Int of arrInt) {
      if (objInt[Int]) {
        objInt[Int] += 1
      } else {
        objInt[Int] = 1
      }
  }

  // loop thru objInt to find odd Int
  for (key in objInt) {
    // return odd int
    if (objInt[key] % 2 === 1) {
      return parseInt(key)
    }
  }
}


// Test result

console.log(findTheOddInt([7]) === 7) // should return 7
console.log(findTheOddInt([0]) === 0) // should return 0
console.log(findTheOddInt([1,1,2]) === 2) // should return 2
console.log(findTheOddInt([0,1,0,1,0]) === 0) // should return 0
console.log(findTheOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1]) === 4) // should return 4