let findPermutations = (str) => {

    if (str.length < 2 ){
      return [str]
    }
  
    let permutationsArray = [] 
  
    // loop thru given string array
    for (let i = 0; i < str.length; i++){
      let char = str[i]
  
      // remove duplicate string
      if (str.indexOf(char) != i)
      continue
  
      
      let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
      // find permuation with remainder string
      for (let permutation of findPermutations(remainder)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  }

    // test result

    // input 'a' should return ['a']
    console.log(findPermutations('a').length === 1)
    console.log(findPermutations('a').includes('a'))

    // input 'ab' should return ['ab', 'ba']
    console.log(findPermutations('ab').length === 2)
    console.log(findPermutations('ab').includes('ab'))
    console.log(findPermutations('ab').includes('ba'))
    
    // input 'abc' should return ['abc','acb','bac','bca','cab','cba']
    console.log(findPermutations('abc').length === 6)
    console.log(findPermutations('abc').includes('abc'))
    console.log(findPermutations('abc').includes('acb'))
    console.log(findPermutations('abc').includes('bac'))
    console.log(findPermutations('abc').includes('bca'))
    console.log(findPermutations('abc').includes('cab'))
    console.log(findPermutations('abc').includes('cba'))

    // input 'aabb' should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
    console.log(findPermutations('aabb').length === 6)
    console.log(findPermutations('aabb').includes('aabb'))
    console.log(findPermutations('aabb').includes('abab'))
    console.log(findPermutations('aabb').includes('abba'))
    console.log(findPermutations('aabb').includes('baab'))
    console.log(findPermutations('aabb').includes('baba'))
    console.log(findPermutations('aabb').includes('bbaa'))