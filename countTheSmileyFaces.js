let countSmileys = (arrFace) => {
    let count = 0
    // loop thru all faces
    for(face of arrFace) {
        // count up when smiley face found
        if (face.includes(')') || face.includes('D') ) {
            count++
        }
    }
  return count
}

// test result

console.log(countSmileys([]) ===  0) // should return 0 for empty array
console.log(countSmileys([':)', ';(', ';}', ':-D']) === 2) // should return 2
console.log(countSmileys([';D', ':-(', ':-)', ';~)']) === 3) // should return 3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']) === 1) // should return 1